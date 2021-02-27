import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
     
    },
    paper: {
      padding: theme.spacing(6),
      textAlign: "center",
      color: theme.palette.text.primary,
      marginTop: "50px",
    },
    form:{
      marginBottom: "20px"
    },
    btn: {
      textTransform : "none",
      marginTop:"20px",
      padding:"5px",
      width: "90%",
    }
  })
);