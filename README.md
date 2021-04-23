# Covariance

Covariance is a collaborative inventing platform that offers a mechanism for working on innovations together. 
Is Rarely one person armed with all the skills to complete a project all on their own. To alleviate this issue, 
our platform aims to collect and integrate tools that innovators already know and love, 
as well as help bring like minded people together. 

Covariance will allow inventors to create repositories for their public or private projects, to collect all their documentation, 
as well as keep track of changes to projects. Additionally the platform will feature a community driven marketplace where innovators can find collaborators, 
working for profit or for the sake of creation. 

You can find the live prototype at https://willyyhuang.github.io/soen-357/  

## Purpose
This Project was created in part to satisfy the requirements of SOEN 357: User Interface Design @
Concordia University


## Installation

### Windows Subsystem for Linux (WSL)
This project runs best in WSL, so if you're on windows, you'll want to enable this feature. You can find more comprehensive
instructions for doing that [here](https://docs.microsoft.com/en-us/windows/wsl/install-win10). But for completeness, here is a summary:

**Note:** Make sure windows is up to date before starting this. You may also need to enable Virtualization in your BIOS

1. Open a power shell window and run `dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart`
2. in the same power shell  window run `dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart`, Then restart your machine.
3. Download the latest [WSL2 updates here](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi), and install them.
4. Back in the power shell run `wsl --set-default-version 2`
5. Open the Microsoft store, then [navigate to the Ubuntu 20.04 page](https://www.microsoft.com/store/apps/9n6svws3rx71), and click "get".
6. Once installed, launch the Ubuntu 20.04 App from the start menu and follow the account set-up instructions. Make sure to pick a memorable sudo password.

After completing the above steps, you should now have an Ubuntu terminal that you can run the rest of the installation in.

### Brew (MacOS only)
MacOS lacks a native package manager. If you haven't already you'll want to install [brew](https://brew.sh/).

To install brew, in a terminal, simply run:
```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Once it completes, you can continue with the installation instructions.

### Node
You'll also need node to build the front end, as  well as mange the dependencies there as well. It is highly recommended
that you use [NVM](https://github.com/nvm-sh/nvm) that way you can manage different versions of node going forward.

On either WSL, Ubuntu, MacOS, run the following commands:
```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
## You'll probably need to restart your terminal before running the following 2 commands.
nvm install 14
nvm alias default 14
```

#### Yarn
You'll also likely need Yarn, it's generally consided a superior package bundler than NPM.

Yarn is a Javascript package manager for your code. It allows you to use and share code with other developers from around the world. Yarn does this quickly, securely, and reliably so you don’t ever have to worry.

Yarn allows you to use other developers’ solutions to different problems, making it easier for you to develop your software. If you have problems, you can report issues or contribute back, and when the problem is fixed, you can use Yarn to keep it all up to date.

Code is shared through something called a package (sometimes referred to as a module). A package contains all the code being shared as well as a package.json file which describes the package.

Simply run:
```shell
npm i -g yarn
```
After installing yarn, simply clone the repository and type `yarn install` at the project directory terminal and let it run

Congratulation, you have completed the project  installation.

**Note:** if you're on WSL / Windows you'll need to make sure that Docker is set up to pass through commands from WSL.
Open the docker desktop application, goto the Settings, and make sure the WSL checkbox is ticked under "resources"


## Usage
All that's left to do, is start your local development server to run the project. To do this all you need to do is run:

```shell
yarn start
```

This will transpile the code base and minify it as well as start a development server on your machine at http://localhost:3000

### Production Build
To create a production build of the site, simply run:
```shell
yarn build 
```

Which will transpile a production ready build of the code base.