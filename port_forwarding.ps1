# Get WSL ip addr
$remote_addr = bash.exe -c "ip addr show eth0 | grep 'inet '"
$found = $remote_addr -match '\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}';
if( $found ) {
	$remote_addr = $matches[0];
	Write-Output "remote ip is $remote_addr";
} else {
	Write-Output "The Script Exited, the ip address of WSL 2 cannot be found";
	exit;
}

# Port Forwarding
$addr='0.0.0.0';
$ports=@(80);
$remote_ports=@(3000);
Invoke-Expression "netsh interface portproxy reset";
for( $i = 0; $i -lt $ports.length; $i++ ) {
	$port = $ports[$i];
	$remote_port = $remote_ports[$i];
	Invoke-Expression "netsh interface portproxy add v4tov4 listenport=$port listenaddress=$addr connectport=$remote_port connectaddress=$remote_addr";
}
Invoke-Expression "netsh interface portproxy show v4tov4";
