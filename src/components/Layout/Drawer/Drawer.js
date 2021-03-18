
import classes from "./Drawer.module.css";
import Nav from "../../Nav/Nav";


const Drawer = ({open})=> {
    const drowerClasses=[classes.content];
    if(open){
         drowerClasses.push(classes.open)

    }
    else{
        drowerClasses.push(classes.closed)
    }
    return(
        <div className={classes.Drawer}>
        <div className={drowerClasses.join(" ")}>
            <Nav/>
            </div>
        </div>
    );
}

export default Drawer;