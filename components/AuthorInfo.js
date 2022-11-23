import Typography from '@mui/material/Typography';




export default function AuthorInfo(props) {  
    return <>
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              {props.name}
            </Typography>
            <Typography  align="center" color="text.primary" paragraph>
            {props.birth_date} - { props.death_date ? props.death_date : "Present Day"}
            </Typography>
                
            </>
}