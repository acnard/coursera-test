# Environment setup

- [ ] chrome browser (for developer tools)
- [ ] github account
- [ ] code editor (VS Code or SublimeText3)
- [ ] install git for windows 
  - [ ] enable windows command prompt, and windows default console window
  - [ ] to check, in the command prompt type *git --version*
- [ ] install node.js for windows (we need this to install browsersync)
  - [ ] to check, from command prompt type *node--version*
  - [ ] it'll also install the node package manager (nmp), to check at cmd prompt type *npm --version*
- [ ] install browsersync, if you google it'll tell you the command to use, which is *npm install -g browser-sync*
  - [ ] as usual, to check in CMD type *browser-sync --version*
- [ ]  create a respository for the course (coursera-test) 
  <img src="image-20211117103644685.png" alt="image-20211117103644685" style="zoom:50%;" />
- [ ] clone the repository to your local machine: 
  - [ ] In the **Code** menu you can find the URL of the repository on github:
    <img src="image-20211117104651662.png" alt="image-20211117104651662" style="zoom:50%;" />
  - [ ] In the CMD prompt issue the command git clone followed by the url. eg
     *git clone https://github.com/acnard/coursera-test.git*
- [ ] Now the repository is cloned inside the folder from which you issued the clone command (in this case Users\Anna Nardella). If you cd into the repository folder (coursera-test) you can issue a git status command: 
  <img src="image-20211117105232596.png" alt="image-20211117105232596" style="zoom: 80%;" />
- [ ] at this point, when you work on this local clone of the repository you can mark changes for commit, then commit them, then push your commits to the remote repository. The commands are:
  - [ ] git add
  - [ ] git commit -m
  - [ ] git push
  - [ ] git pull 
- [ ] the first time you try to commit you will be prompted to set up your name and email address in git

one t

# how tos

## move the local clone of a remote git repository

I'd initially cloned the remote repository to Users\Anna Nardella,  <img src="image-20211117111357212.png" alt="image-20211117111357212" style="zoom:67%;" />

but now I'd like this to be under C:\ACNdata\WebDev . I can accomplish this by just moving the entire coursera-test folder to the desired location. Alternatively, I could delete it and re-clone the repository by CDing into it from the command prompt and then issuing the git clone command.

I tried just moving the entire coursera-test folder (which has the .git folder inside it) to the desired location. Then, to check I went into it and did git status and it worked. <img src="image-20211117113528999.png" alt="image-20211117113528999" style="zoom: 80%;" />

Now, what I want to do is have also my course notes and test files in the repository, so that I can work on this course from different PCs.<img src="image-20211117113817951.png" alt="image-20211117113817951" style="zoom:67%;" />

so what I'll do is move the *course_notes* folder under coursera-test and see what happens:
![image-20211117114226079](image-20211117114226079.png)

it recognizes that I've added this folder and tells me it is not tracked. So now I have to do *git add course_notes*: it should recursively add everything contained in that directory.









