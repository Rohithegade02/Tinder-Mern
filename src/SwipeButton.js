import React from 'react'
import './SwipeButtton.css'
import ReplayIcon from '@material-ui/icons/Replay'
import CloseIcon from '@material-ui/icons/Close'
import StarRateIcon from '@material-ui/icons/StarRate'
import FlashOnIcon from '@material-ui/icons/FlashOn'
import FavoriteIcon from '@material-ui/icons/Favorite'
import IconButton from '@material-ui/core/IconButton'
const SwipeButton = () => {
  return (
    <div className='swipeButton'>
    <IconButton className='swipeButton-repeat'>
        <ReplayIcon  fontSize='large'/>
    </IconButton>
    <IconButton className='swipeButton-left'>
         <CloseIcon  fontSize='large'/>
    </IconButton> 
    <IconButton className='swipeButton-star'>
         <StarRateIcon fontSize='large' />
    </IconButton>   
    <IconButton className='swipeButton-right'>
         <FavoriteIcon fontSize='large'  />
    </IconButton>   
    <IconButton className='swipeButton-lightning'>
         <FlashOnIcon  fontSize='large'/>
    </IconButton>     
    </div>
  )
}

export default SwipeButton