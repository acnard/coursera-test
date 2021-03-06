# Environment setup, things to install

- [ ] chrome browser (for developer tools)
- [ ] github account
- [ ] code editor (VS Code or SublimeText3)
- [ ] install git for windows 
  - [ ] enable windows command prompt, and windows default console window
  - [ ] to check, in the command prompt type `git --version`
- [ ] install node.js for windows (we need this to install browsersync, can skip this and following step if you instead use Live Server extension for VS code instead)
  - [ ] to check, from command prompt type `node--version`
  - [ ] it'll also install the node package manager (nmp), to check at cmd prompt type `npm --version`
- [ ] install browsersync, if you google it'll tell you the command to use, which is *npm install -g browser-sync*
  - [ ] as usual, to check in CMD type `browser-sync --version`

# VS Code

## installation

for the Lenovo, from code.visualstudio.com, downloaded the 64-bit system installer for windows (so it'll install for all users):

<img src="image-20211210130940921.png" alt="image-20211210130940921" style="zoom:50%;" />

<img src="image-20211210131039730.png" alt="image-20211210131039730" style="zoom:50%;" />

For this computer, I changed the install directory to under D:, since C: is pretty full

<img src="image-20211210131239357.png" alt="image-20211210131239357" style="zoom:50%;" />

I left the other settings at the default, except that I checked "create a desktop icon"

<img src="image-20211210131405601.png" alt="image-20211210131405601" style="zoom:50%;" />

## settings

- I set the **Monokai** dark color theme 
- Emmet is integrated by default into Code

other need to add:

- markdown
- git lens/history

## Live Server extension (instead of browsersync)

Install in VS code: <img src="image-20211214123432271.png" alt="image-20211214123432271" style="zoom:67%;" />

Then right-cilck the file in the VS Code file explorer pane and pick Open with Live Server: 
<img src="image-20211214123626269.png" alt="image-20211214123626269" style="zoom:67%;" />

The first time, you have to allow VS Code through the firewall: 
<img src="image-20211214123747331.png" alt="image-20211214123747331" style="zoom:67%;" />

and it opens your html page with the local server in the default browser: 
<img src="image-20211214123909843.png" alt="image-20211214123909843" style="zoom:67%;" />

any changes you make in the source are automatically shown without having to manually reload the page 

# Install git on windows

## download location 

![image-20211119144257629](image-20211119144257629.png)

run the installer

<img src="image-20211119144341339.png" alt="image-20211119144341339" style="zoom:67%;" />

## installer options

on the Lenovo, I changed the install location to D:

<img src="image-20211119144448953.png" alt="image-20211119144448953" style="zoom: 50%;" />

kept default components to install

<img src="image-20211119144514250.png" alt="image-20211119144514250" style="zoom:50%;" />

picked notepad++ as default editor because I do not have VS Code installed (and anyhow I think this is only commit messages)

<img src="image-20211119144620530.png" alt="image-20211119144620530" style="zoom:67%;" />

set the default branch name to "main" (rather than "master")

<img src="image-20211119144659741.png" alt="image-20211119144659741" style="zoom:67%;" />

set git to run from the command line 

<img src="image-20211119144737540.png" alt="image-20211119144737540" style="zoom:67%;" />

other settings for SSH

<img src="image-20211119144854604.png" alt="image-20211119144854604" style="zoom:67%;" />

<img src="image-20211119144934977.png" alt="image-20211119144934977" style="zoom:67%;" />

line ending conventions

<img src="image-20211119145037259.png" alt="image-20211119145037259" style="zoom:67%;" />

windows default console rather than MinTTy

<img src="image-20211119145114985.png" alt="image-20211119145114985" style="zoom:50%;" />

default git pull behavior

<img src="image-20211119145138585.png" alt="image-20211119145138585" style="zoom:67%;" />

new credential helper

<img src="image-20211119145201812.png" alt="image-20211119145201812" style="zoom:67%;" />

other options left as default

<img src="image-20211119145226115.png" alt="image-20211119145226115" style="zoom:67%;" />

## check that git installed

after this it installs. When finished you in CMD you can do `git --version` to check

Then, for example you can use `git clone [github url]` to clone a remote repository to this local machine.

## set up identity

when you try to do your first commit it will complain because you've yet to set up your identity: 
<img src="image-20211119145640472.png" alt="image-20211119145640472" style="zoom:67%;" />

to do this:

```
git config --global user.email "nardella.anna@gmail.com"
git config --global user.name "Anna Nardella"
```

nb the `--global` option sets this identity for all repositories

after doing this, `git config --list` will show you that the identity is set:

<img src="image-20211119150132837.png" alt="image-20211119150132837" style="zoom:67%;" />

at which point the commit works (it fires up notepad++ for entering the commit message, after which you must save and close the editor)

## store github credentials

the first time you do **git push**, you will see a connect to github dialog:

<img src="image-20211119150805144.png" alt="image-20211119150805144" style="zoom:50%;" />

If you choose sign in with your browser, you go to the credential manager page:

<img src="image-20211119150859994.png" alt="image-20211119150859994" style="zoom:67%;" />

There you enter your github credentials:

<img src="image-20211119151032674.png" alt="image-20211119151032674" style="zoom:67%;" />

at which point it completes the git push:

<img src="image-20211119151135780.png" alt="image-20211119151135780" style="zoom:50%;" />

at which point, for future commits, you do not need to enter your github credentials any more

# git how tos (command line)

## clone remote repository to local machine

- [ ] create a respository for the course (coursera-test) 
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
- [ ] the first time you try to commit you will be prompted to set up your name and email address in gitconfig

## move the local clone of a remote git repository

I'd initially cloned the remote repository to Users\Anna Nardella,  <img src="image-20211117111357212.png" alt="image-20211117111357212" style="zoom:67%;" />

but now I'd like this to be under C:\ACNdata\WebDev . I can accomplish this by just moving the entire coursera-test folder to the desired location. Alternatively, I could delete it and re-clone the repository by CDing into it from the command prompt and then issuing the git clone command.

I tried just moving the entire coursera-test folder (which has the .git folder inside it) to the desired location. Then, to check I went into it and did git status and it worked. <img src="image-20211117113528999.png" alt="image-20211117113528999" style="zoom: 80%;" />

## Track new files (git add)

Now, what I want to do is have also my course notes and test files in the repository, so that I can work on this course from different PCs.<img src="image-20211117113817951.png" alt="image-20211117113817951" style="zoom:67%;" />

so what I'll do is move the *course_notes* folder under coursera-test and see what happens:
<img src="image-20211117114226079.png" alt="image-20211117114226079" style="zoom:67%;" />

it recognizes that I've added this folder and tells me it is not tracked. So now I have to do `git add course_notes`: it should recursively add everything contained in that directory. 
<img src="image-20211117114937824.png" alt="image-20211117114937824" style="zoom: 80%;" />

and now it stages all the new files in the folder. NB the files are staged exactly as they were when you did `git add`. And then when you commit it is the staged version that gets used. So if you do any subsequent changes you need to restage.

## commit the changes

Now I can do `git commit` to commit the newly staged files: I need to enter a message in my preconfigured editor (which is VS code)

![image-20211117115704270](image-20211117115704270.png)

at which point the changes are commited: 
<img src="image-20211117115802036.png" alt="image-20211117115802036" style="zoom:67%;" />

## push commits to remote repository

At this point if I do a git status I will see that some changes are not staged (because I am editing inside course_notes, so there are new changes there), but I can push the changes that *have* been staged by doing `git push`.
![image-20211117120337530](image-20211117120337530.png)

And after this I expect to see the new files in the remote repository on github:
<img src="image-20211117120602156.png" alt="image-20211117120602156" style="zoom: 80%;" />

and in fact there it is: 
<img src="image-20211117120712803.png" alt="image-20211117120712803" style="zoom:80%;" />

## git config to set name and email address

when you run the git config command you can set various global settings, in windows the gitconfig file is located in the windows user folder: 
<img src="image-20211117121009270.png" alt="image-20211117121009270" style="zoom:67%;" />

In CMD prompt you can just type git config to see the list of commands, or git config --list to see the currently stored settings:
<img src="image-20211117121201099.png" alt="image-20211117121201099" style="zoom:80%;" />

The name and email I'd previously set globally (you could also do it repository-specific) with the commands: 
<img src="image-20211117121428968.png" alt="image-20211117121428968" style="zoom:80%;" />

## stage all changes (untracked files, changed files, and deleted files) 

after adding some new folders to the coursera-test folder, I did git add on those folder names to start tracking all the files in them. Then, when I did git status I got this: 
<img src="image-20211117123704687.png" alt="image-20211117123704687" style="zoom:67%;" />

it had staged the files inside the newly added folders, but there had also been some changes elsewhere, which were not staged.

To stage all the changes you have made (including deletions!) you can use the command `git add -A`:
<img src="image-20211117123846517.png" alt="image-20211117123846517" style="zoom:80%;" />

now everything is staged  and I can do **git commit** followed by a **git push**.

## fetch changes from remote

before you start working on your local copy you should do a fetch to get all changes that might have happened in the remote repository in the  meantime.  For example, in my case I had worked on this project on the Lenovo computer and pushed the changes to github. Now I want to work on these files on my Dell computer. 

- If I just do git status, it tells me everything is all right (it doesn't know about the changes that have happened on github).

- So I need to do `git fetch origin`   so that it finds out that the local clone is actually behind the remote origin.<img src="image-20211124104042776.png" alt="image-20211124104042776" style="zoom: 80%;" />

- At this point, I can do `git pull` to merge all the remote changes into my local branch (which happens to be main) <img src="image-20211124104647808.png" alt="image-20211124104647808" style="zoom:67%;" /> 

 Now I see that the new stuff that I had on the remote (eg the mybootstrap folder) is present on the Dell computer: 
<img src="image-20211124104807552.png" alt="image-20211124104807552" style="zoom: 67%;" />

NB. probably, on visualstudio Code, when you do a synchronize it does a fetch (or pull?) before pushing any of your local changes

## simultaneous changes from two computers

Now on the Dell computer my status is
 <img src="image-20211124105501552.png" alt="image-20211124105501552" style="zoom: 80%;" />

everything is caught up with the origin, except that I kept working on the notes markdown file, and added some screenshots, and these changes are not staged yet.

Meanwhile, on the Lenovo computer, I also had some changes that I hadn't commited or pushed to remote. Specifically, there I'd modified the files: EnviornmentSetup.md, and under mybootstrap, styles.css and index.html. And there was also a new file (my logo AnnaLongHairColor.jpg)

So what I want to do now is first commit and push the changes on the Lenovo, and then on the Dell see if I can fetch and merge them without confilicts:

1. On the Lenovo, I first do a `git fetch origin` which responds with nothing, meaning there is nothing different on the remote to fetch (as expected) . So I go on and do `git add -A`  then do `git commit` with message `bootstrap navigation bar`  (these were the last changes I'd done there). Now my branch is ahead of origin by one commit, and I go ahead and do `git push`. At this point all the navigation bar changes are on the remote.

2. On the DELL, my status is meanwhile the same as above (I have some unstaged changes). So let me try first to do a `git fetch` from the remote, where it tells me I am behind by one commit (the navigation bar one). I try to do a `git pull` to update my local branch with those changes, but it tells me I can't do that because of my uncommitted changes: <img src="image-20211124111837234.png" alt="image-20211124111837234" style="zoom:80%;" />

3. So I first add and commit the local changes on the Dell machine, then try to do a git fetch/pull again. <img src="image-20211124113040970.png" alt="image-20211124113040970" style="zoom:80%;" />

    

 Now on the Dell my bootstrap index.html file shows the navigation bar changes that I'd done on the Lenovo: 
<img src="image-20211124113613392.png" alt="image-20211124113613392" style="zoom:67%;" />

The file that had been modified on both computers (EnvironmentSetup.md) contains the merge of changes done on both sides.

## git graph

with the git graph VS code extension, I can see the diffs of this merge:
<img src="image-20211124120035663.png" alt="image-20211124120035663" style="zoom:80%;" />

On the graph, you can select the merge commit and inspect the diffs: 
<img src="image-20211124120758379.png" alt="image-20211124120758379" style="zoom:67%;" /> 

## overall workflow with git branching

1. `git fetch` to check if there is anything updated on origin (if there is nothing, the command gives no output).
2. `git pull` to retrieve changes from origin (remote repository) 
3. when you start working on a feature, do `git branch branchname`  to create a branche and then `git checkout branchname` to switch to that branch.
   - You can do `git branch` to see a list of all the branches, the current one will have a star next to it.
4. Start making your changes on the branch. 
   - At any time, you can switch back to the main branch with `git checkout main` and it will put your files back exactly as they were before you started making those changes.
   - Add and commit your changes to the branch as usual, with `git add -A` followed by `git commit`.
5.  When the changes in the branch are done (and all committed), and you want to merge them into the main stream: 
   - first do `git checkout main` to return to the main branch
   - then do `git  merge branchname` : this will bring the changes you made on the branch into your main stream.
6. Do a `git push` to update the remote. Note that the remote will not know about the branch you created as this was created and merged on the local machine before doing any push. I suppose it would know about it if you did a push while the branch was still unmerged. 







# github pages

from the github repository click **Settings**, select the **Pages** tab, and you can see the URL where the repository web pages are published
<img src="image-20211117122215645.png" alt="image-20211117122215645" style="zoom:67%;" /> 

Now, clicking directly on this will just give you an autogenerated page, but you can edit this URL to view any other html page inside your repository. For example, my module2 solution is here: 
<img src="image-20211117122517163.png" alt="image-20211117122517163" style="zoom:67%;" />

And if I edit the pages URL appropriately I can view the html file : 
<img src="image-20211117122649598.png" alt="image-20211117122649598" style="zoom: 67%;" />

# Browsersync

nb in VS code as an alternative to this you can use the Live Server extension

- To install this you need to first install node.js for windows (which installs node package manager, npm)

- Once that is done you can use the command  `npm install -g browser-sync`

- When browser-sync is installed, from the command line you should be able to check its version: 

![image-20211117124858770](image-20211117124858770.png)

## start browsersync on a folder

To start browsersync, you first navigate to the folder in which you want to sync changes to files (the browser will auto reload whenever there is a change to a file in that folder), then give a command like this:

<img src="image-20211117125148457.png" alt="image-20211117125148457" style="zoom:80%;" />

where `--directory` just gives you a listing of the folder you are in, and `--files "*"` says to sync changes in all files in the folder. 

So in my case the command is: 
<img src="image-20211117125433035.png" alt="image-20211117125433035" style="zoom:67%;" />

and now at the access URL it shows me the folder being synced:
<img src="image-20211117125636823.png" alt="image-20211117125636823" style="zoom:67%;" />

however this doesn't actually work because the command does NOT include subfolders, so it'll only watch the files in the folder where you started browser sync. 

Instead, what you need to do is: 

```
browser-sync start --server --files="**/*"
```

![image-20211117131425197](image-20211117131425197.png)

this makes it watch the files in the current folder plus those in any subfolders (in my case, the css folder)



# chrome developer tools

## layout config

to get the desired layout:

1. In the chrome developer tools window, click the three-dot menu and choose the bottom-docking option 
   <img src="image-20211121133221837.png" alt="image-20211121133221837" style="zoom:67%;" />
2. Then click the gearwheel to open chrome dev tools settings
   <img src="image-20211121133324663.png" alt="image-20211121133324663" style="zoom:50%;" />
   and select the vertical panel layout:
   <img src="image-20211121133426024.png" alt="image-20211121133426024" style="zoom:67%;" />

This will give you the actual webpage on top, and underneath it the html and styles side-by side, and the console under that.:

<img src="image-20211121133541372.png" alt="image-20211121133541372" style="zoom:67%;" />

# Bootstrap

From **getbootstrap.com** you can download compiled CSS and JS:

<img src="image-20211121125734958.png" alt="image-20211121125734958" style="zoom:80%;" />

The zip you download from there contains a css folder and a js folder with all the bootstrap files:

<img src="image-20211121130721060.png" alt="image-20211121130721060" style="zoom:80%;" /> 

nb in the lecture it says you also have to install jquery, which bootstrap depends on, however bootstrap 5 non longer depends on jquery.

## lecture 25 example

In the lecture25 example, styles.css is initially an empty file where we define our own css styles (overriding/customizing the bootstrap ones), and for this reason we must declare it *after* bootstrap.min.css.

nb bootstrap.min.css is just bootstrap.css with all unnecessary whitespace taken out, for faster performance.

Similarly script.js is an initally empty file into which we can put in our own add-on javascript, and we likewise declare this after the bootstrap js files.

<img src="image-20211121131923201.png" alt="image-20211121131923201" style="zoom:67%;" />

## my own example with bootstrap 5

to re-create the above with bootstrap 5, I did *not* download jquery. I just copied the bootstrap css and js folders into my working directory and created an index html file similar to the above, only I removed the reference to jquery

<img src="image-20211121134510572.png" alt="image-20211121134510572" style="zoom:67%;" />

This initially gave me errors in the console because I hadn't put the empty script.js and styles.css files into the folders yet. But once I added the files the errors went away

## grid system

you always have to have an outermost container, which can contain rows that in their turn contain columns:

<img src="image-20211121140647525.png" alt="image-20211121140647525" style="zoom:67%;" />

the column classes are interpreted like so.

-  **Size** specifies a screen size (eg, md = medium) from which those columns apply (for smaller screen sizes the columns will collapse and just stack one on top of the other, *unless* there is another rule that applies.)
- **Span** is just how many columns (of the total 12) the element should span

<img src="image-20211121140723403.png" alt="image-20211121140723403" style="zoom:50%;" />

Bootstrap is a 12- column grid. If on a row you specify elements whose spans add up to more than 12, they will wrap onto another row. For example, if I have four columns of span 4:
<img src="image-20211121141310161.png" alt="image-20211121141310161" style="zoom:50%;" />

nb you don't have to use divs to use the bootstrap classes, you can also apply them to other html elements: 
<img src="image-20211121141423271.png" alt="image-20211121141423271" style="zoom:50%;" />

## container vs container-fluid

- container toggles between different fixed-width layouts at the various screen size breakpoints. 

- container-fluid also toggles, but in addition to this stretches/contracts to fit in between breakpoints.

## breakpoints

the bootstrap documentations shows to what the md, lg, sm, and other size breakpoints correspond.

<img src="image-20211121144254090.png" alt="image-20211121144254090" style="zoom:67%;" />

nb cf how these have changed relative to the older version of bootstrap (below): 
in practice, *the old sm is now md, the old md is now lg, and the old lg is now xl*

<img src="image-20211121162133127.png" alt="image-20211121162133127"  />

so in my case (md) as I shrink the screen down the columns continue to be side-by-side, down to a width of 768. But the moment I go to 767pixels, the columns stack  (the below is with the fluid-container, so the columns also stretch to fill whatever horizontal space is available in either case)

<img src="image-20211121144708687.png" alt="image-20211121144708687" style="zoom:67%;" />

<img src="image-20211121144737790.png" alt="image-20211121144737790" style="zoom:67%;" />

with the regular (non-fluid) container, the result is instead as below : 

<img src="image-20211121144920948.png" alt="image-20211121144920948" style="zoom:67%;" />

<img src="image-20211121144856881.png" alt="image-20211121144856881" style="zoom:67%;" />

## multiple classes (breakpoints) per column 

 I can do something like this, 

<img src="image-20211121145303087.png" alt="image-20211121145303087" style="zoom:67%;" />

and now, when I go below 678 pixels, instead of just stacking it will apply the span I've specified for **sm** screen size, ie that each column in that case should have a span of 6. This means each column will take up half the screen (since there are 12 columns total in the bootstrap grid). So the third column will overflow.

<img src="image-20211121145446710.png" alt="image-20211121145446710" style="zoom:67%;" />

two rows with overflow look like this (added margin to have some space between rows):

<img src="image-20211121145900153.png" alt="image-20211121145900153" style="zoom:67%;" />

This sm column span applies down to 576 pixels:

<img src="image-20211121150444701.png" alt="image-20211121150444701" style="zoom: 50%;" />

But as soon as we go below that it stacks: 

<img src="image-20211121150530451.png" alt="image-20211121150530451" style="zoom: 50%;" />

## specify xsmall column span

to specify what column span you want *below* the **sm** one, just use no infix at all, and that will apply down to zero pixels.: For example, here in the second row, the col-8 says that below the sm breakpoint we want the span to be 8 columns. If you *just* specified this (removing the md and sm spans) then the 8-column span would apply no matter what.

<img src="image-20211121151520003.png" alt="image-20211121151520003" style="zoom:80%;" /> 

  
