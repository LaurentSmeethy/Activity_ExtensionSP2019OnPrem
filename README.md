## RGDS Banner Custom Branding

## How it works 
Simple extension that injects a css depending on the page (2 different types : On for the home page and one for others, incase it is required in cssRessource folder.)
- No hardcoded links but it looks for the files with a specific name in Style Library. Can be changed in the main .ts to match
your needs and rebuilt.
- To deploy on premise, make sure to add the application in the given website as the AppCatalog admin. If you try as owner who is not appcatalog admin, you will get the usual 'Something went wrong', plain impossible to debug if you do not know about it.
- To modify a css rule, simply modify the css file and reupload without having to re-transpile the solution.

### Building the code

gulp clean;gulp bundle --ship;gulp package-solution --ship (Git Bash. If PS use &&)
