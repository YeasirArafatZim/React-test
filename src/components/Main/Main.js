import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import styles from './Main.module.css';
import { IoIosRemoveCircleOutline } from 'react-icons/io';

const Main = () =>{

    const [place, setPlace] = useState([]);
    const [id, setId] = useState(1);
    
    const addPlace = () =>{
        let obj = {
            id: id,
            value: 'Popular Place ' + id,
        }
        setId((prevState) => prevState + 1);
        let temp = place;
        temp.push(obj);
        setPlace([...temp]);
    }

    const removePlace = (id) =>{
        let temp = place;
        var index = temp.findIndex(function(x){
            return x.id === id;
       })
       if (index !== -1) temp.splice(index, 1);
       setPlace([...temp]);
    }

    const handleChange = (e, id) =>{
        e.preventDefault();
        let temp = place;
        var index = temp.findIndex(function(x){
            return x.id === id;
        })
        if(index !== -1){
            temp[index].value = e.target.value;
        }
        setPlace([...temp]);
    }

    return(
        <div>
            <Row>
                <Col md={2} className="mx-0 px-0 d-none d-md-block">
                    <div className={`sticky-top ${styles.sidebar}`}>
                    
                    </div>
                </Col>

                <Col md={10} style={{paddingLeft:'10px'}}>
                    <Row className={`${styles.head}`}>
                        <Col md={8} sm={8} xs={7} className="d-flex align-items-center">
                            <p className={styles.heading}>Want to add a new place?</p>
                        </Col>
                        <Col md={4} sm={4} xs={5} className="d-flex align-items-center justify-content-end">
                            <button className={`btn ${styles.btn}`}>+ add new place</button>
                        </Col>
                    </Row>

                    <Row className={styles.content}>
                        <p className={`${styles.conHead} mt-4`}>Popular Places</p>
                        <Row>
                            <Col md={4}>
                                <div className={styles.box}>
                                    <div>
                                        <p className={styles.text1}>Manikgonj</p>
                                        <p className={styles.text2}>Habigonj</p>
                                    </div>
                                    <button className={`btn ${styles.editBtn}`}>EDIT</button>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={styles.box}>
                                    <div>
                                        <p className={styles.text1}>Manikgonj</p>
                                        <p className={styles.text2}>Habigonj</p>
                                    </div>
                                    <button className={`btn ${styles.editBtn}`}>EDIT</button>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={styles.box}>
                                    <div>
                                        <p className={styles.text1}>Manikgonj</p>
                                        <p className={styles.text2}>Habigonj</p>
                                    </div>
                                    <button className={`btn ${styles.editBtn}`}>EDIT</button>
                                </div>
                            </Col>
                        </Row>



                        {/* Dynamic button  */}
                        <div className="mt-5">
                            <p style={{textAlign: 'left'}}>Popular Place</p>
                            {
                                place.map(p => (
                                    <div key={p.id} style={{textAlign: 'left'}}>
                                        <input type="text" value={p.value} onChange={(e)=>handleChange(e,p.id)} className={styles.input}/>
                                        <button className={`btn`} onClick={()=>(removePlace(p.id))}><IoIosRemoveCircleOutline size={33} className={styles.remove}/></button>
                                    </div>
                                ))
                            }
                            

                            <div style={{textAlign: 'left'}}>
                                <button className={`btn ${styles.add}`} onClick={addPlace}>+ add a place</button>
                            </div>
                        </div>

                    </Row>
                </Col>
            </Row>
        </div>
    )
}
export default Main;