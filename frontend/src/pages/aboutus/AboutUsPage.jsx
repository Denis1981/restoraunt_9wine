import React, {useEffect, useState} from "react";
import axios from "axios";
import "./index.css";
import { image1_about,
         image2_about,
         image1_aboutBlock,
         image2_aboutBlock,
         image3_aboutBlock,
         image4_aboutBlock,
         image5_aboutBlock,
         image6_aboutBlock,
         image1_karaokeBlock
} from "../../assets";

const AboutUspage = () => {

    const [sale, setSale]=useState([]);

     useEffect(()=>{
        const getSale = async () => {
            const res = await axios.get('http://127.0.0.1:8000/api/v1/sale/?format=json');
            console.log(res.data);
            setSale(res.data);
        }
        getSale()
    }, []);

    return (
    <>
        <section id="aboutUs">
               <div className="container">
                   <div className="row">
                       <div className="col-xxl-7">
                           <div className="aboutUs__block">
                                <h1>Винный ресторан NineWines - это частичка Европы, Нового Света, Кавказа и Крыма в Санкт-Петербурге.</h1>
                                <p>Ресторан, в котором собраны отборные вина из разных регионов мира от бутиковых производителей Европы, Нового света, Кавказа и Крыма.</p>
                                <p>Винная карта ресторана очень динамична, составляется собственником ресторана и постоянно обновляется его интересными находками, собранными в разных уголках света. Мы сами привозим эти вина, что позволяет предлагать их нашим дорогим гостям по стоимости, соизмеримой с ценой чашки капучино. А наш Шеф повар создал меню, которое служит идеальным гастрономическим сопровождением к винам, представленным в ассортименте ресторана.</p>
                                <img src={image1_about} alt="" title="" className="aboutUs_image1" />
                           </div>
                       </div>
                       <div className="col-xxl-1" />
                       <div className="col-xxl-4">
                           <div className="aboutUs__block">
                                <img src={image2_about} alt="" title="" className="aboutUs_image2" />
                                <p>Интерьером пространства занимались ребята из легендарного дизайнерского коллектива Broburo.
Картины, украшающие стены ресторана, были написаны специально для 9wines, а наш стол в виде девятки занимает особое место в центре зала. За ним удобно веселиться большим компаниям, проводить дегустации и наслаждаться царящей вокруг атмосферой гедонизма.</p>
                               <p>А каждую пятницу и субботу в Nine Wines можно потанцевать. Мы привозим талантливых диджеев с популярной тематической музыкой.</p>
                           </div>
                       </div>
                   </div>
               </div>
           </section>

           <section id="special">
                <div className="container">
                    <div className="row">
                        {
                            sale.map((sale, i) => (
                               <div className="col-xxl-6">
                                    <h2>{sale.title}</h2>
                                    <p dangerouslySetInnerHTML={{ __html: sale.contentSale }}/>
                                   <div className="special_notes-wine">
                                        <p><b>{sale.itemSale1}</b></p>
                                        <p><b>{sale.itemSale2}</b></p>
                                        <button className="btn btn-more">узнать больше</button>
                                    </div>
                               </div>
                            ))
                        }
                        {
                            sale.map((sale, i) => (
                               <div className="col-xxl-6 text-center">
                                    <img src={sale.photo} className="special_image1" alt="" title={sale.itemSale1}/>
                               </div>
                            ))
                        }
                    </div>
                </div>
           </section>

           <section id="aboutBlock">
               <div className="container">
                   <div className="row">
                        <div className="col-xxl-12 text-center">
                            <h2>к нам хочется возвращаться</h2>
                        </div>
                   </div>
                   <div className="row">
                       <div className="col-xxl-4 text-center">
                           <p>Самые изысканные вина <br /> и закуски</p>
                           <img src={image2_aboutBlock} className="aboutBlock__image image1" alt="" title=""/>
                       </div>
                       <div className="col-xxl-4 text-center">
                           <p>Неповторимый, дизайнерский <br /> интерьер</p>
                            <img src={image1_aboutBlock} className="aboutBlock__image image2" alt="" title=""/>
                       </div>
                       <div className="col-xxl-4 text-center">
                           <p>Всегда праздничная <br /> атмосфера </p>
                            <img src={image4_aboutBlock} className="aboutBlock__image image3" alt="" title=""/>
                       </div>
                   </div>
               </div>
           </section>

           <section id="karaokeBlock">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12 text-center">
                            <h2>Nine Wines — караоке-ресторан</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-6">
                            <p>
                                Nine Wines — это также караоке-ресторан, оборудованный самой современной звуковой и световой аппаратурой, и у нас регулярно проходят музыкальные шоу и конкурсы с участием гостей нашего ресторана.
                            </p>
                            <p>
                                Наша атмосфера располагает к комфортному отдыху — современный стильный интерьер, отменное вино, прекрасная аппаратура! А новичкам и тем, кому нужна компания, помогают звукорежиссер и бэк-вокалисты. В перерывах между выступлениями гостей свою музыку презентуют модные ди-джеи.
                            </p>
                            <button className="btn btn-more">узнать больше</button>
                        </div>
                        <div className="col-xxl-6">
                            <img src={image1_karaokeBlock} className="karaokeBlock__image" alt="" title="" />
                        </div>
                    </div>
                </div>
           </section>
    </>);
}

export default AboutUspage;