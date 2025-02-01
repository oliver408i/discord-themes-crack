# How it works
*For programmers*
## CSS for the themes
The CSS for the custom themes are already included by default in the big giant discord CSS file. It is not referenced by the html, however, unless you add the `custom-theme-background` class to the main `html` element. However, discord resets the html element, removing the class, every time you click on something else in discord. Others tried to use a for-loop to force change the class, but that causes flashing, which isn't good.  
For the actual custom theme, there is a `<sytle>` element in the document head which sets the `--custom-theme-background` css variable. However, even if we add this element, it still isn't referenced by anything.
## Forcing css references \[OLD METHOD\]
Using the chrome inspector, I dug through the css applied to the html element when I preview the theme, and I found a chunk of the css that references `--custom-theme-background` a lot, and disappears when the preview is turned off. I added that code, and then it worked!
## Sidebar issues \[OLD METHOD\]
The sidebar for some reason, won't show properly, so I had to hard-code the driver css for that.

## New method to color the page
As said before, the `custom-theme-background` class is responsible for actually putting the custom theme on the entire app, and must be applied to the HTML element. Using a `MutationObserver`, which watches the html element and detects whenever its class list is changed, the code will put the `custom-theme-background` class back into the classlist before the next browser repaint. The design of the `MutationObserver` api prevents flashes on the webpage and this completely removes the need to take CSS from discord, manually extract the important bits, and then inject a lot of redundant css into the `head`. The `--custom-theme-background` css variable is still added as a `<style>` element like before.