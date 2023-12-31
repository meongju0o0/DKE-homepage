# Data & Knowledge Engineering Lab.
- Kyung Hee University, College of Software Convergence
- Department of Computer Science and Engineering
- Data and Knowledge Engineering Labortory
- Research Topic
    - In-Memory RDBMS Query Optimization
    - Graph Neural Network Learning Engine Development
    - Development of Search Engine with NLP

## Dependencies
- macOS 14.1.2
- Ubuntu 22.0.4
- node 20.5.1
- serve 14.2.1
- other dependencies -> package.json

## Build, Run
### Ubuntu 22.0.4
- clone repository
```bash
git clone https://github.com/meongju0o0/DKE-homepage
```

- change directory
```bash
cd DKE-homepage
```

- install node.js
```bash
sudo apt-get update
curl -sL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install nodejs
```

- install node packages
```bash
npm install -g serve@14.2.1
npm install
```

- build, hosting
```bash
npm run build
serve -s build
```

### macOS 14.1.2
- clone repository
```zsh
git clone https://github.com/meongju0o0/DKE-homepage
```

- change directory
```zsh
cd DKE-homepage
```

- install node.js
```zsh
brew install node@20
```

- install node packages
```zsh
npm install -g serve@14.2.1
npm install
```

- build, hosting
```zsh
npm run build
serve -s build
```

### License
© 2023 KHU DKE Lab.
KHU DKE Lab uses MIT License.
