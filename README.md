MegaB
l
og - Modern B
l
og Applicat
A f
ull-featured bl
og appl
icat
ion b
u
t
i
lt wi
h Reac
t
t, Appwri
t
ing, user aut
t
edi
ion
e, and TinyMCE, featuring rich
hen
icat
ion, and responsive design.
Table of Con
t
en
ts
t
ext
Features
Tech S
tack
Prerequ
t
isi
es
Installat
ion
Environmen
t Variables
Usage
Projec
t
S
tru
c
ture
Avai
lable Scripts
Con
trib
ut
ing
Depl
oymen
u
t
Tro
bleshoo
t
ing
License
✨ Features
Rich Text Edi
t
or: TinyMCE in
t
egrat
t
ion wi
h advanced formatt
ing opt
ions
User A
ut
hen
t
icat
ion: Sec
ure l
ogin/sign
t
up wi
h
t
Appwri
e
l
B
og Managemen
t: Creat
e, edi
t, dele
t
e, and pu
bl
ish bl
og posts
Responsive Design: Mobi
t
le-first approach wi
h Tai
lwind CSS
S
tat
e Managemen
t: Red
ux Too
lk
t
i
for efficien
t stat
e handl
ing
Real-t
ime Updat
es: Live bl
og post updat
es
File Upl
oads: Image and media upl
l
oad capabi
t
i
ies
SE
O
Friendly:
pt
O
imized for search engines
Modern UI: Clean and in
tu
t
i
ive
user in
t
erface
Tech S
tack
Fron
t
end: Reac
t
t 18.3.1, Vi
e
t
S
yling: Tai
lwind CSS 3.4.7
S
tat
e Managemen
t: Red
ux Too
lk
i
t 2.2.7, Reac
t Red
t
Backend: Appwri
e 15.0.0 (BaaS)
Rich Text Edi
t
or: TinyMCE Reac
t 5.1.1
Ro
ut
ing: Reac
t Ro
ut
er D
M 6.25.1
O
Form Handling: Reac
t Hoo
k Form 7.52.1
HTML Parsing: h
tml-reac
t
-parser 5.1.12
Prerequ
t
isi
es
Before yo
u
begin, ensure yo
u
have
t
he fo
ll
owing installed:
Node.js (version 16.0.0
or higher)
npm or yarn package manager
Appwri
t
e A
u
cco
n
t (for backend services)
TinyMCE A
u
cco
n
t (for rich
t
ext
t
edi
or)
Installat
ion
1. Cl
t
one
he reposi
t
ory
git clone https://github.com/AnshulJn95/Blog.git
cd Blog
ux 9.1.2
2. Install dependencies
npm install
# or
yarn install
3. Se
t up environmen
4. S
tart t
he devel
opmen
npm run dev
# or
yarn dev
t variables (see Environmen
t server
t Variables)
5. O
pen yo
ur browser and navigat
e
t
o http://localhost:5173
Environmen
t Variables
Creat
e a .env fi
le in
t
he roo
t
direc
t
ory and add
t
he fo
# Appwrite Configuration
VITE
APPWRITE
URL=
_
_
"https://cloud.appwrite.io/v1"
"your-tinymce-api-key-here"
VITE
APPWRITE
PROJECT
ID=
_
_
_
"your-project-id-here"
VITE
APPWRITE
DATABASE
ID=
_
_
_
"your-database-id-here"
VITE
APPWRITE
COLLECTION
ID=
_
_
_
"your-collection-id-here"
VITE
APPWRITE
BUCKET
ID=
_
_
_
"your-bucket-id-here"
# TinyMCE Configuration
VITE
TINYMCE
API
KEY=
_
_
_
ll
owing variables:
Ge
tt
ing Y o
ur Environmen
t Variables:
t
Appwri
e Se
tup:
1. Creat
e an acco
u
n
t at
t
Appwri
e Cl
o
u
d
2. Creat
e a new projec
t
3. Se
t
t up a database wi
h co
llec
t
ions for posts
4. Creat
e a st
orage b
u
cke
t
for fi
le
upl
oads
5. Copy
t
he respec
t
ive IDs from yo
t
ur Appwri
e conso
le
TinyMCE Se
tup:
1. Sign
up at
TinyMCE
2. Ge
t
yo
ur API key from t
he dashboard
3. Add yo
ur domain
t
t
o
he approved domains l
ist
Usage
For Users:
1. Registrat
ion/Login: Creat
e an acco
u
t
n
or l
og in
t
o exist
ing acco
u
t
n
2. Creat
e Posts: Use
t
he rich
t
ext
t
edi
or t
t
o wri
e and format
bl
og posts
3. Manage Posts: Edi
t, dele
t
e, or pu
bl
ish yo
ur posts
4. Browse Con
t
en
t: Read posts from o
t
her users
5. Media Upl
oad: Add images and media t
o yo
ur posts
For Devel
opers:
1. Componen
t Devel
opmen
t: Creat
e re
usable Reac
t
componen
ts
2. S
tat
e Managemen
t: Use Red
ux sl
ices for managing appl
icat
ion stat
e
3. API In
t
egrat
ion: Ut
l
t
i
ize Appwri
e SDK for backend operat
ions
4. S
t
yling: Use Tai
lwind CSS classes for responsive design
Projec
t
S
tru
c
Blog/
├── public/
│ └── assets/
├── src/
│ │ ├── RTE/ │ │ └──
...
│ ├── pages/
│ │ └──
...
ture
│ ├── index.html
│ ├── components/
│ │ ├── Header/
│ │ ├── Footer/
# Rich Text Editor
│ │ ├── Home/
│ │ ├── Login/
│ │ ├── Signup/
│ ├── store/
│ │ ├── authSlice.js
│ │ ├── postSlice.js
│ │ └── store.js
│ ├── appwrite/
│ │ ├── auth.js
│ │ ├── config.js
│ │ └──
...
│ ├── App.jsx
│ └── main.jsx
├── .env
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
Available Scripts
In
t
he projec
t
direc
t
ory, yo
u
can ru
n:
Command Descript
ion
npm run dev S
tarts devel
opmen
t server on localhost:5173
npm run buildB
u
i
lds t
he app for prod
u
t
c
ion
npm run preview Preview t
he prod
u
t
c
ion b
u
i
ld l
ocally
npm run lint Ru
n ESLin
t t
o check code qual
t
i
y
Con
trib
ut
We welcome con
Ge
tt
ing S
1. Fork t
2. Cl
one yo
3. Creat
# or
Devel
Fo
ll
ow t
t
Wri
Commi
Types: feat, fix, docs, style, refactor, test, chore
Example:
Closes #123
ing
trib
ut
ions t
o MegaB
l
og! Here's how yo
u
tart
ed
he reposi
t
ory
git fork https://github.com/AnshulJn95/Blog.git
ur fork
git clone https://github.com/your-username/Blog.git
cd Blog
e a new branch
git checkout -b feature/your-feature-name
git checkout -b fix/your-bug-fix
opmen
t Gu
idelines
he exist
ing code st
yle and conven
t
ions
e meaningf
ul commi
t messages
Add commen
ts for complex l
ogic
Ensure responsive design compat
l
t
ibi
i
y
Test
yo
ur changes t
horo
u
gh
ly
t Message Format
type(scope): description
[optional body]
[optional footer]
feat(editor): add image upload functionality
- Implement drag and drop image upload
- Add image compression before upload
- Update TinyMCE configuration for image handling
can help:
P
ull Requ
est
Process
1. Updat
e doc
umen
tat
ion if needed
2. Add
t
ests for new features
3. Ensure
t
he b
u
ild passes
npm run build
npm run lint
4. Creat
e a pull requ
t
est wi
h:
Clear t
i
tle and descript
ion
Screensho
ts (if UI changes)
Test
ing instru
t
c
ions
Issu
e references
Code S
t
yle
Use ES6+ features
Fo
ll
ow Reac
t
best prac
t
ices
u
Use f
t
nc
ional componen
t
ts wi
h hoo
ks
Implemen
t proper error handl
ing
Fo
ll
ow Tai
lwind CSS conven
t
ions
Depl
oymen
t
Vercel Depl
oymen
t
1. Connec
t
yo
ur reposi
t
ory t
o Vercel
2. Se
t
environmen
t variables in Vercel dashboard
3. Depl
oy - Vercel wi
ll aut
omat
ically b
u
i
ld and depl
oy
Ne
tlify Depl
oymen
t
1. B
u
ild
t
he projec
t
npm run build
2. Upl
oad
3. Se
t
t
he dist fo
environmen
lder t
o Ne
tl
ify
t variables in Ne
tl
ify se
tt
ings
Man
1. B
ual Depl
oymen
t
u
ild for prod
u
t
c
ion
npm run build
2. Upl
oad
t
he dist fo
lder t
o yo
ur host
ing provider
Tro
u
bleshoo
t
ing
Common Issu
u
B
ild Errors
es
# Clear node modules and reinstall
rm -rf node
_
modules package-lock.json
npm install
Environmen
t Variables No
t Loading
t
Ensure variables start wi
h VITE
_
Restart
devel
opmen
t
t server af
er adding variables
Check for t
ypos in variable names
TinyMCE No
t Loading
Verify
API key is correc
t
t
Check domain is whi
el
ist
ed in TinyMCE dashboard
Ensure in
t
erne
t
t
connec
ion for CDN access
Appwri
t
e Connec
t
ion Issu
es
Verify projec
t ID and endpoin
t URL
Check C
RS se
tt
ings in
t
Appwri
O
e conso
le
Ensure API keys have proper permissions
Ge
tt
ing Help
Issu
es: Creat
e an issu
Disc
ussions: Use Gi
tHu
Doc
umen
tat
ion: Check
e on Gi
tHu
b
b Disc
ussions for qu
est
ions
t
Appwri
e and TinyMCE docs
This projec
License
t
is l
icensed
u
nder t
cknowledgmen
ts
Appwri
t
e for providing excellen
t
TinyMCE for t
he rich
t
ext
t
edi
or
t
Happy B
For qu
⁂
