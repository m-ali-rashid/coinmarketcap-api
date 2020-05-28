
import { makeStyles } from '@material-ui/core/styles';


export const muiTabStyles = makeStyles({
  root:{},
	textColorInherit: {
    background:'#0a1426',
    transition:'0.3s',
    minHeight:'67px',
    opacity:1,
    '&.Mui-selected':{backgroundColor:'#203040'},
    '&:hover':{backgroundColor:'#203040', marginTop:'-5px'}
  },
	textColorPrimary: {
    transition:'0.5s',
    minWidth:'20px',
    padding:'0 1rem',
    opacity:0.7,
    borderRight:'2px solid transparent',
    borderLeft:'2px solid transparent',
    '&.Mui-selected':{color:'#8064a4'},
    '&:hover':{color:'#8064a4'}
    // '&.Mui-selected':{borderLeft:'2px solid #8064a4',borderRight:'2px solid #8064a4', color:'#8064a4'},
    // '&:hover':{borderLeft:'2px solid #8064a4',borderRight:'2px solid #8064a4', color:'#8064a4'}
  },
	textColorSecondary: {
    color:'#0a1425',
    background:'#eff6f8',
    transition:'0.5s',
    minWidth:'20px',
    padding:'0 1.5rem',
    opacity:0.7,
    borderRight:'2px solid transparent',
    borderLeft:'2px solid transparent',
    '&.Mui-selected':{color:'white',background:'#151e61'},
    '&:hover':{}
    // '&.Mui-selected':{borderLeft:'2px solid #8064a4',borderRight:'2px solid #8064a4', color:'#8064a4'},
    // '&:hover':{borderLeft:'2px solid #8064a4',borderRight:'2px solid #8064a4', color:'#8064a4'}
  },
}, { name: 'MuiTab' });

export const muiAppBarStyles = makeStyles({
  colorPrimary:{background:'#0a1426'},
  colorInherit:{background:'transparent'}
}, {name: 'MuiAppBar'})

export const muiPaperStyles = makeStyles({
  elevation4:{boxShadow:'none'},
  elevation1:{boxShadow:'none'}
}, {name: 'MuiPaper'})

export const muiTabIndicator = makeStyles({
  root:{margin:'0 auto'},
  indicator:{backgroundColor:'#8064a4'},
  centered:{}
}, {name: 'MuiTabs'})

















//
