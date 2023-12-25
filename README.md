You may use this Custom-Django Template I made, which is simplified, and I found efficient when handling you're own API's.

all goods as initial & has admin (currently hidden)

to use the template:
1. you need a database inside:
application/_core/database/["db.sqlite3]
2. you need to have `.env` just outside the application folder
where it should contains:
APP_NAME=app_name
SECRET_KEY=secret_key
ALLOWED_HOSTS=str localhost 127.0.0.1
DEBUG=True or False
DATABASE_URL=""






page animation loader from https://loading.io/, and can use some in the DaisyUI.
in addition, i found a good guide for the skeleton since currently this time the skeleton from htmx and daisyUI and tailwind is not usefull for me. so i use manual skeleton loader that i take from this video tutorial https://www.youtube.com/watch?v=tvGR675k5No.

you can use your own font-awesome but here is mine that is used in this template:
<script src="https://kit.fontawesome.com/7a54e52029.js" crossorigin="anonymous"></script>


component libary for tailwind css
https://daisyui.com/




