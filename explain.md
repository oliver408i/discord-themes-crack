# How it works
*For programmers*
## CSS for the themes
The CSS for the custom themes are already included by default in the big giant discord CSS file. It is not referenced by the html, however, unless you add the `custom-theme-background` class to the main `html` element. However, discord resets the html element, removing the class, every time you click on something else in discord. Others tried to use a for-loop to force change the class, but that causes flashing, which isn't good.  
For the actual custom theme, there is a `<sytle>` element in the document head which sets the `--custom-theme-background` css variable. However, even if we add this element, it still isn't referenced by anything.
## Forcing css references
Using the chrome inspector, I dug through the css applied to the html element when I preview the theme, and I found a chunk of the css that references `--custom-theme-background` a lot, and disappears when the preview is turned off. I added that code, and then it worked!
## Sidebar issues
The sidebar for some reason, won't show properly, so I had to hard-code the driver css for that.