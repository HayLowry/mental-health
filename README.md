# mental-health

IS 405 Final Project

## Requirements

### Install Django

If you have installed it previously, uninstall it.

```
pip3 uninstall django
```

Reinstall it with these extra packages.

```
pip3 install django djangorestframework django-cors-headers
```

### Install Node and React

install node at [https://nodejs.org/en/download]()

Install React and these packages

```
npm install react 
npm install react-router-dom
npm install axios
```

## Database

If you ever need to reset the database, delete the db.sqlite3 file, then run:

```
python3 manage.py migrate
```

And it should generate a new blank database.
