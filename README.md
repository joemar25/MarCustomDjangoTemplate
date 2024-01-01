Table of contents:

- [Status](#status)
- [Usage](#usage)
- [References](#references)
- [Settings](#settings)

<hr>

```md
Author Note: You may use this Custom-Django Template I made, which is simplified, and I found efficient when handling you're own API's.
```

<hr>

## Status

1. Has admin (currently hidden by default)
2. Integrated HTMX
3. Used component library for the frontend main css framework
4. Has settings

## Usage

1. you need a database inside - application/\_core/database/["db.sqlite3]
2. you need to have `.env` just outside the application folder.

   where it should contains:

   ```env
   APP_NAME=app_name
   SECRET_KEY=secret_key
   ALLOWED_HOSTS=weblink.com localhost 127.0.0.1
   DEBUG=True or False
   DATABASE_URL=""
   ```

## Tech Used

1. [Nodejs](https://nodejs.org/en)

   - daisyui
   - tailwindcss
   - webpack
   - theme-change

2. [Page Animation](https://loading.io/)
3. [DaisyUI](https://daisyui.com/)

   Note: Component libary for tailwind css to help me write lesser codes in the html.
   here is the official website.

## References:

1. [Skeleton Tutorial](https://www.youtube.com/watch?v=tvGR675k5No)

   Note: This is good guide for the skeleton since currently this time the skeleton from htmx and daisyUI and tailwind is not usefull for me. So I use manual skeleton loader that I take from this video.

## Settings:

1. `(will be added)` Font Size - Allow users to increase or decrease the font size according to their comfort.
2. `(will be added)` Contrast Settings - Provide options to adjust color contrast, especially between text and background.
3. `(done)`Color Theme - Allow users to choose from different color themes or create a high-contrast mode.
4. `(will be added)` Line Spacing - Enable users to adjust line spacing for better readability.
5. `(will be added)` Font Type - Offer different font options, considering readability for users with visual impairments.
6. `(will not be included)` Text-to-Speech (TTS) - Include a text-to-speech feature that allows users to listen to the content.
7. `(will not be included)` Keyboard Shortcuts - Provide users the ability to customize keyboard shortcuts for navigation.
8. `(will not be included)` Animations and Transitions - Allow users to control or disable animations and transitions to reduce motion sensitivity.
9. `(will not be included)` Cursor Size and Color - Let users customize the size and color of the cursor for better visibility.
10. `(will not be included)` Background Images - Allow users to toggle background images on or off to reduce visual clutter.
11. `(will not be included)` Link Styles - Provide options to customize link styles, such as underlining or bolding.
12. `(will not be included)` Audio Descriptions - Include an option for users to enable or disable audio descriptions for multimedia content.
13. `(will not be included)` Closed Captions - Allow users to customize closed caption settings, including font size and color.
14. `(will not be included)` Focus Indicator - Let users customize the focus indicator style and color for keyboard navigation.
15. `(will not be included)` Time Delays - For interactive elements, allow users to adjust time delays for tooltips or pop-ups.
16. `(will not be included)` Language Preferences - Allow users to select their preferred language for content.
17. `(will not be included)` Reading Mode - Include a reading mode that simplifies the layout and focuses on the main content.
18. `(will not be included)` Skip Navigation - Provide an option to show or hide the "skip to content" link.
19. `(done)` Reset to Defaults - Include a button that allows users to reset all settings to default.
20. `(will be added)` Help and Guidance - Include tooltips or guidance for each setting to explain its impact.

## Pages

1. Landing Page (index)
2. Home
3. About
4. Evaluate
