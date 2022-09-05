import React from 'react'
//import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import './Header.css'
function Header()  {
  return (
    <div className="header">
    <IconButton>
        <PersonIcon  fontSize="large" className='header_icon'/>
    </IconButton>
    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAAB8CAMAAACiyYmHAAAAaVBMVEX/VVX/////SEj/UlL/Skr/TEz/Tk7/Q0P/UFD/RUX/6+v/5+f/PT3/QED/YmL/9PT/29v/1dX/srL/wsL/cnL/qqr/o6P/iYn/l5f/ODj/np7/aWn/4uL/y8v/t7f/XV3/kJD/f3//eXm2TbgWAAAD10lEQVR4nO2b6ZKqMBCFScIOAiqbLCK+/0PecdRRILKeGOoW38+ZqskZ0uk+STqKsrGxsbGx8T/CDMpka+DB8iJWqGwVHFhIiB2fNNk6OjDPJoT4F2rKVtKhIDf2nipbSAt1T+4cDF22lgZG+RBGnOuqFoFxJH9E7ooyh3V+CSOBt56PRg9vwoifWLIFPWkKIyTbyVb0oC2MlNo6Aq0jjATKKvKGdWwLI061BmWvPPa2BPIVKKP7rrB1KAs4wlag7O4uOMpkx9nNj3FxFLlZQ0s+CCOBXB9kdLPFk1JqDTjxQ+yXTGLdND+F2C+JvNlUoz5htid8AbAPlZkWfcLI3hWsi3qxx/u53juTtzATahwZTX2S8PZnvELZwM8FTqam38rhhZPJzeuArp9sdhKmi9b+bYSIMykut042SUVt0q3LfYCj0fnV56z/hi0oZdD0MYDTWWBM8UcII1H3PwJgxX8DdIKF68S6+CKSmZW+Bmj/fbdj9j9wwFcm+h5EWTNYrGykLkLg4a9d34Po2BA2QReJwPHP9IZzcN5/dRo7jzdscJBZreC+/qVYWo2L+ycJdDJpe7KOD+Nn0rrHhPEIkBnDzNtZ6r7umVF9Nq0f8EPgZHLKzdlQTCM/c0YeAhj+3HKjWHk5Ktu3cXCl3OSFkd1vC3uA7eVoPDzYFGKUYWQT190QJSjItAl5fRR2hZnLvt3iPELIzUn/bnEWGCNLJ6fQQTgGeAYVfCY5BngGIzY/k/ERMWbNqTpDwhDl0nXwwki9/JOxalY9HCBdfvRp1gJ0kXh5vtDT4WGmA3A+Wu+Z11zOy4WpAhblT4Zd7i8E5H2QsKFDr1mUaxX2X0+lkOBHrEoh6SIG5DG0r/4lA2T+iwhhyUprpQ8w/ULcBeSMeId31iRAWOudgAx7QGzFVQG+54rw/AK2laAz9Qpu+kFnF/hqecGcwupjLokmgbq3P4F1YQ4IFLzBAGwq74APCQrcbdJu2g3DADWuz0dHfrIA2X+kjbhVHkuNvLEZbFwYT4ltvoBVcnSHA/NArixFX/BSjMMGbHQ7yhCT6QtovGMawMmGIvpB9HBxmAnqIFPrhbrENIMorf6GGbrEtY8tWpqwu0Cusnq+LrHtdmo+b236oaj4eqJ5cyxQUYl/3MVGtxe9iL7zUo9O/Gjfe2xjqun4SPMv+hcfwqm7bNwu2I6tLz8dVPU6GCxRwUWT0MasG2HcN6P24UoldVcz9WSmR96Hc8rIO0l9ZMk0qlR5Eh33hePYtuMU+3MWeoq6hqe87EedsXNdg1LDdXeWaq5A1MbGxsbGBop//NE1VaD59dAAAAAASUVORK5CYII=' className='header_logo' />
    <IconButton>
    <ForumIcon fontSize='large' className="header_icon" />
    </IconButton>
    </div>
        
  )
}

export default Header