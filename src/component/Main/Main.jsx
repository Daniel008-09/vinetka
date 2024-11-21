import './Main.css';
import React, { useState, useEffect } from 'react';


const Main = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [adlet, setAdlet] = useState(false);
    const [alesha, setAlesha] = useState(false);
    const [timur, setTimur] = useState(false);
    const [daniel, setDaniel] = useState(false);
    const [baiaman, setBaiaman] = useState(false);
    const [aizirek, setAizirek] = useState(false);
    const [asima, setAsima] = useState(false);
    const [eldar, setEldar] = useState(false);
    const [angelina, setAngelina] = useState(false);
    const [aman, setAman] = useState(false);
    const [almash, setAlmash] = useState(false);
    const [aiana, setAiana] = useState(false);
    const [kursant, setKursant] = useState(false);
    const [bibinur, setBibinur] = useState(false);
    const [adina, setAdina] = useState(false);
    const [aibike, setAibike] = useState(false);
    const [nuraiym, setNuraiym] = useState(false);
    const [madinaA, setMadinaA] = useState(false);
    const [kanykei, setKanykei] = useState(false);
    const [nurina, setNurina] = useState(false);
    const [akmanai, setAkmanai] = useState(false);
    const [marina, setMarina] = useState(false);
    const [elnura, setElnura] = useState(false);
    const [z, setZ] = useState(false);
    const [batma, setBatma] = useState(false);
    const [madina, setMadina] = useState(false);



    const openMadina = () => {
      setMadina(true);
    };  
  
    const closeMadina = () => {
      setMadina(false);
    };
    useEffect(() => {
      if (madina) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }, [madina]);


    
    const openBatma = () => {
      setBatma(true);
    };  
  
    const closeBatma = () => {
      setBatma(false);
    };
    useEffect(() => {
      if (batma) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }, [batma]);



    const openZ = () => {
      setZ(true);
    };  
  
    const closeZ = () => {
      setZ(false);
    };
    useEffect(() => {
      if (z) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }, [z]);


    const openElnura = () => {
      setElnura(true);
    };  
  
    const closeElnura = () => {
      setElnura(false);
    };
    useEffect(() => {
      if (elnura) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }, [elnura]);



    const openMarina = () => {
      setMarina(true);
    };  
  
    const closeMarina = () => {
      setMarina(false);
    };
    useEffect(() => {
      if (marina) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }, [marina]);




    const openAkmanai = () => {
      setAkmanai(true);
    };  
  
    const closeAkmanai = () => {
      setAkmanai(false);
    };
    useEffect(() => {
      if (akmanai) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }, [akmanai]);


    const openNurina = () => {
      setNurina(true);
    };  
  
    const closeNurina = () => {
      setNurina(false);
    };
    useEffect(() => {
      if (nurina) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }, [nurina]);




    const openKanykei = () => {
      setKanykei(true);
    };  
  
    const closeKanykei = () => {
      setKanykei(false);
    };
    useEffect(() => {
      if (kanykei) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }, [kanykei]);




    const openMadinaA = () => {
      setMadinaA(true);
    };  
  
    const closeMadinaA = () => {
      setMadinaA(false);
    };
    useEffect(() => {
      if (madinaA) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }, [madinaA]);



    const openNuraiym = () => {
      setNuraiym(true);
    };  
  
    const closeNuraiym = () => {
      setNuraiym(false);
    };
    useEffect(() => {
      if (nuraiym) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }, [nuraiym]);



    const openAibike = () => {
      setAibike(true);
    };  
  
    const closeAibike = () => {
      setAibike(false);
    };
    useEffect(() => {
      if (aibike) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }, [aibike]);



    const openAdina = () => {
      setAdina(true);
    };  
  
    const closeAdina = () => {
      setAdina(false);
    };
    useEffect(() => {
      if (adina) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }, [adina]);



    const openBibinur = () => {
      setBibinur(true);
    };  
  
    const closeBibinur = () => {
      setBibinur(false);
    };
    useEffect(() => {
      if (bibinur) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }, [bibinur]);



    const openKursant = () => {
      setKursant(true);
    };  
  
    const closeKursant = () => {
      setKursant(false);
    };
    useEffect(() => {
      if (kursant) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }, [kursant]);




    const openAiana = () => {
      setAiana(true);
    };  
  
    const closeAiana = () => {
      setAiana(false);
    };
    useEffect(() => {
      if (aiana) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }, [aiana]);




    const openAlmash = () => {
      setAlmash(true);
    };  
  
    const closeAlmash = () => {
      setAlmash(false);
    };
    useEffect(() => {
      if (almash) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }, [almash]);



    const openAman = () => {
      setAman(true);
    };  
  
    const closeAman = () => {
      setAman(false);
    };
    useEffect(() => {
      if (aman) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }, [aman]);


    const openAngelina = () => {
      setAngelina(true);
    };  
  
    const closeAngelina = () => {
      setAngelina(false);
    };
    useEffect(() => {
      if (angelina) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }, [angelina]);



    const openEldar = () => {
      setEldar(true);
    };  
  
    const closeEldar = () => {
      setEldar(false);
    };
    useEffect(() => {
      if (eldar) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }, [eldar]);



    const openAsima = () => {
      setAsima(true);
    };  
  
    const closeAsima = () => {
      setAsima(false);
    };
    useEffect(() => {
      if (asima) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }, [asima]);



    const openAizirek = () => {
      setAizirek(true);
    };  
  
    const closeAizirek = () => {
      setAizirek(false);
    };
    useEffect(() => {
      if (aizirek) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }, [aizirek]);





    const openBaiaman = () => {
      setBaiaman(true);
    };  
  
    const closeBaiaman = () => {
      setBaiaman(false);
    };
    useEffect(() => {
      if (baiaman) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }, [baiaman]);



    const openDaniel = () => {
      setDaniel(true);
    };  
  
    const closeDaniel = () => {
      setDaniel(false);
    };
    useEffect(() => {
      if (daniel) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }, [daniel]);



    const openTimur = () => {
      setTimur(true);
    };  
  
    const closeTimur = () => {
      setTimur(false);
    };
    useEffect(() => {
      if (timur) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }, [timur]);




    const openAlesha = () => {
      setAlesha(true);
    };  
  
    const closeAlesha = () => {
      setAlesha(false);
    };
    useEffect(() => {
      if (alesha) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }, [alesha]);




  
    const openAdlet = () => {
        setAdlet(true);
      };  
    
      const closeAdlet = () => {
        setAdlet(false);
      };
      useEffect(() => {
        if (adlet) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
      }, [adlet]);
  



    const openModal = () => {
      setIsModalOpen(true);
    };  
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
    useEffect(() => {
      if (isModalOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }, [isModalOpen]);









  return (
    <div className='image-row'>

      <div className="line">
    <div className='box'>
      <img src="/adelina.jpg" alt="Аделина" className='img' id='adi'/>
<div style={{height: '50px'}}></div>
      <p className='name' >Абдымомунова Аделина</p>
      <button className='button' onClick={openModal}>больше информации</button>
    </div>

    <div className='box'>
      <img src="/adilet.jpg" alt="Адилет" className='img' id='adil'/>
<div style={{height: '50px'}}></div>
      <p className='name' >Джурабаев Адилет</p>
      <button className='button' onClick={openAdlet}>больше информации</button>
    </div>




    <div className='box'>
      <img src="/alesha.jpg" alt="Алеша" className='imgm' id='alex'/>
<div style={{height: '50px'}}></div>
      <p className='name' id='mac' >мактрахер</p>
      <button className='button' onClick={openAlesha}>больше информации</button>
    </div>




    <div className='box'>
      <img src="/timur.jpg" alt="timur" className='img' />
<div style={{height: '50px'}}></div>
      <p className='name' >Маширапов Тимурлан</p>
      <button className='button' onClick={openTimur}>больше информации</button>
    </div>
  </div>

      <div className="line2">

    <div className='box'>
      <img src="/daniel.jpg" alt="timur" className='img' />
<div style={{height: '50px'}}></div>
      <p className='name' >Жолдошев Даниел</p>
      <button className='button' onClick={openDaniel}>больше информации</button>
    </div>


    <div className='box'>
      <img src="/baiaman.jpg" alt="timur" className='img' />
<div style={{height: '50px'}}></div>
      <p className='name' >Махаматисаев Баяман</p>
      <button className='button' onClick={openBaiaman}>больше информации</button>
    </div>


    <div className='box'>
      <img src="/aizirek.jpg" alt="timur" className='imgModalaa' id='o'/>
<div style={{height: '50px'}}></div>
      <p className='name'  id='ip'>Жоробаева Айзирек</p>
      <button className='button' onClick={openAizirek}>больше информации</button>
    </div>


    <div className='box'>
      <img src="/asima.jpg" alt="timur" className='img' />
<div style={{height: '50px'}}></div>
      <p className='name' >Кудайбердиева Асима</p>
      <button className='button' onClick={openAsima}>больше информации</button>
    </div>
    </div>


      <div className="line3">

    <div className='box'>
      <img src="/eldar.jpg" alt="timur" className='img' />
<div style={{height: '50px'}}></div>
      <p className='name' >Пулатов Элдар</p>
      <button className='button' onClick={openEldar}>больше информации</button>
    </div>



    <div className='box'>
      <img src="/angelina.jpg" alt="timur" className='img' />
<div style={{height: '50px'}}></div>
      <p className='name' >Заирбекова Ангелина</p>
      <button className='button' onClick={openAngelina}>больше информации</button>
    </div>


    <div className='box'>
      <img src="/aman.jpg" alt="timur" className='img' />
<div style={{height: '50px'}}></div>
      <p className='name' >Иманалиев Аман</p>
      <button className='button' onClick={openAman}>больше информации</button>
    </div>


    <div className='box'>
      <img src="/almash.jpg" alt="timur" className='img' />
<div style={{height: '50px'}}></div>
      <p className='name' >Суйунова Алмаш</p>
      <button className='button' onClick={openAlmash}>больше информации</button>
    </div>
    </div>


    <div className="line4">

    <div className='box'>
      <img src="/aiana.jpg" alt="timur" className='img' />
<div style={{height: '50px'}}></div>
      <p className='name' >Кудайбердиева Аяна</p>
      <button className='button' onClick={openAiana}>больше информации</button>
    </div>


    <div className='box'>
      <img src="/kursant.jpg" alt="timur" className='img' />
<div style={{height: '50px'}}></div>
      <p className='name' >Абдувалиев Курсант</p>
      <button className='button' onClick={openKursant}>больше информации</button>
    </div>


    <div className='box'>
      <img src="/bibinur.jpg" alt="timur" className='img' />
<div style={{height: '50px'}}></div>
      <p className='name' >Камчиева Бибинура</p>
      <button className='button' onClick={openBibinur}>больше информации</button>
    </div>

    <div className='box'>
      <img src="/adina.jpg" alt="timur" className='img' />
<div style={{height: '50px'}}></div>
      <p className='name' >Канатова Адина</p>
      <button className='button' onClick={openAdina}>больше информации</button>
    </div>
    </div>


      <div className="line5">

    <div className='box'>
      <img src="/aibike.jpg" alt="timur" className='img' />
<div style={{height: '50px'}}></div>
      <p className='name' >Турдубаева Айбийке</p>
      <button className='button' onClick={openAibike}>больше информации</button>
    </div>


    <div className='box'>
      <img src="/nuraiym.jpg" alt="timur" className='img' />
<div style={{height: '50px'}}></div>
      <p className='name' >Кудайбердиева Нурайым</p>
      <button className='button' onClick={openNuraiym}>больше информации</button>
    </div>


    <div className='box'>
      <img src="/madinaA.jpg" alt="timur" className='img' />
<div style={{height: '50px'}}></div>
      <p className='name' >Амангельдиева Мадина</p>
      <button className='button' onClick={openMadinaA}>больше информации</button>
    </div>


    <div className='box'>
      <img src="/kanykei.jpg" alt="timur" className='img' />
<div style={{height: '50px'}}></div>
      <p className='name' >Базантаева Каныкей</p>
      <button className='button' onClick={openKanykei}>больше информации</button>
    </div>
    </div>



    <div className="line6">
    <div className='box'>
      <img src="/nurina.jpg" alt="timur" className='img' />
<div style={{height: '50px'}}></div>
      <p className='name' >Шакирова Нурина</p>
      <button className='button' onClick={openNurina}>больше информации</button>
    </div>


    <div className='box'>
      <img src="/akmanai.jpg" alt="timur" className='img' />
<div style={{height: '50px'}}></div>
      <p className='name' >Ирисова Акманай</p>
      <button className='button' onClick={openAkmanai}>больше информации</button>
    </div>


    <div className='box'>
      <img src="/marina.jpg" alt="timur" className='img' />
<div style={{height: '50px'}}></div>
      <p className='name' >Камбарова Марина</p>
      <button className='button' onClick={openMarina}>больше информации</button>
    </div>


    <div className='box'>
      <img src="/elnura.jpg" alt="timur" className='img' />
<div style={{height: '50px'}}></div>
      <p className='name' >Канатова Элнура</p>
      <button className='button' onClick={openElnura}>больше информации</button>
    </div>
    </div>




      <div className="line7">
    <div className='box'>
      <img src="/zhanbolot.jpg" alt="timur" className='img' />
<div style={{height: '50px'}}></div>
      <p className='name' >Султанбеков Жанболот</p>
      <button className='button' onClick={openZ}>больше информации</button>
    </div>


    <div className='box'>
      <img src="/batma.jpg" alt="timur" className='img' />
<div style={{height: '50px'}}></div>
      <p className='name' >Калбаева Батма</p>
      <button className='button' onClick={openBatma}>больше информации</button>
    </div>


    <div className='box'>
      <img src="/madina.jpg" alt="timur" className='img' />
<div style={{height: '50px'}}></div>
      <p className='name' >Кутпидинова Мадина</p>
      <button className='button' onClick={openMadina}>больше информации</button>
    </div>
    </div>




























      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 style={{color: 'white'}}>ФИО:Абдымомунова Аделина</h2>
            <h2>год рождения: 2008</h2>
            <p>цитата:заработайте себе репутауию, и она будет работать на вас!</p>
            
            <img src="/adelina.jpg" alt="" className='imgModal'/>
            <button className='button1' onClick={closeModal}>закрыть</button> 
          </div>
        </div>
      )}

{adlet && (
        <div className="modal-overlay" onClick={closeAdlet}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 style={{color: 'white'}}>ФИО:Джурабаев Адилет </h2>
            <h2>год рождения: 2009</h2>
            <p>цитата:мои усилия заключаются не в том, чтобы меня любили, а в том, что я любила </p>
               
            <img src="/adilet.jpg" alt="" className='imgModal'/>
            <button className='button1' onClick={closeAdlet}>закрыть</button> 
          </div>
        </div>
      )}



{alesha && (
        <div className="modal-overlay" onClick={closeAlesha}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 style={{color: 'white'}}>ФИО:Агиев Алексей </h2>
            <h2>год рождения: 2008</h2>
            <p>цитата:Пока 7 раз отмеришь другие отрежут </p>
               
            <img src="/alesha.jpg" alt="" className='imgModala' />
            <button className='button1' onClick={closeAlesha}>закрыть</button> 
          </div>
        </div>
      )}


{timur && (
        <div className="modal-overlay" onClick={closeTimur}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 style={{color: 'white'}}>ФИО:Маширапов Тимурлан </h2>
            <h2>год рождения: 2008</h2>
            <p>цитата:Жизнь такова что может быть то чего не может быть и может быть</p>
               
            <img src="/timur.jpg" alt="" className='imgModal' />
            <button className='button1' onClick={closeTimur}>закрыть</button> 
          </div>
        </div>
      )}


{daniel && (
        <div className="modal-overlay" onClick={closeDaniel}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 style={{color: 'white'}}>ФИО:Жолдошев Даниел</h2>
            <h2>год рождения: 2008</h2>
            <p>цитата:В моем словаре нет слово невозможно</p>
               
            <img src="/daniel.jpg" alt="" className='imgModal' />
            <button className='button1' onClick={closeDaniel}>закрыть</button> 
          </div>
        </div>
      )}


{baiaman && (
        <div className="modal-overlay" onClick={closeBaiaman}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 style={{color: 'white'}}>ФИО:Махаматисаев Баяман</h2>
            <h2>год рождения: 2009</h2>
            <p>цитата:-У достойной цели легких путей не бывает</p>
               
            <img src="/baiaman.jpg" alt="" className='imgModal' />
            <button className='button1' onClick={closeBaiaman}>закрыть</button> 
          </div>
        </div>
      )}


{aizirek && (
        <div className="modal-overlay" onClick={closeAizirek}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 style={{color: 'white'}}>ФИО:Жоробаева Айзирек</h2>
            <h2>год рождения: 2008</h2>
            <p>цитата:К сожелению тут нет цитаты. но она сама красивая цитата</p>
               
            <img src="/aizirek.jpg" alt="" className='imgModalaa' />
            <button className='button1'  id='btnai' onClick={closeAizirek}>закрыть</button> 
          </div>
        </div>
      )}


{asima && (
        <div className="modal-overlay" onClick={closeAsima}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 style={{color: 'white'}}>ФИО:Кудайбердиева Асима</h2>
            <h2>год рождения: 2008</h2>
            <p>цитата:Лучше посрать и опоздать, чем прийти вовремя и обосратся!</p>
               
            <img src="/asima.jpg" alt="" className='imgModal' />
            <button className='button1'   onClick={closeAsima}>закрыть</button> 
          </div>
        </div>
      )}


{eldar && (
        <div className="modal-overlay" onClick={closeEldar}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 style={{color: 'white'}}>ФИО:Пулатов Элдар</h2>
            <h2>год рождения: 2008</h2>
            <p>цитата:Мы должны остатся мыми а они оними</p>
               
            <img src="/eldar.jpg" alt="" className='imgModal' />
            <button className='button1'   onClick={closeEldar}>закрыть</button> 
          </div>
        </div>
      )}


{angelina && (
        <div className="modal-overlay" onClick={closeAngelina}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 style={{color: 'white'}}>ФИО:Заирбекова Ангелина</h2>
            <h2>год рождения: 2008</h2>
            <p>цитата:Да, влюбится-это прекрасно. Особенно, если в меня</p>
               
            <img src="/angelina.jpg" alt="" className='imgModal' />
            <button className='button1'   onClick={closeAngelina}>закрыть</button> 
          </div>
        </div>
      )}


{aman && (
        <div className="modal-overlay" onClick={closeAman}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 style={{color: 'white'}}>ФИО:Иманалиев Аман</h2>
            <h2>год рождения: 2008</h2>
            <p>цитата:А я думал что он останется оном а она аноном</p>
               
            <img src="/aman.jpg" alt="" className='imgModal' />
            <button className='button1'   onClick={closeAman}>закрыть</button> 
          </div>
        </div>
      )}


{almash && (
        <div className="modal-overlay" onClick={closeAlmash}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 style={{color: 'white'}}>ФИО:Суйунова Алмаш</h2>
            <h2>год рождения: 2008</h2>
            <p>цитата:За каждой тягостю наступает облегчение</p>
               
            <img src="/almash.jpg" alt="" className='imgModal' />
            <button className='button1'   onClick={closeAlmash}>закрыть</button> 
          </div>
        </div>
      )}


{aiana && (
        <div className="modal-overlay" onClick={closeAiana}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 style={{color: 'white'}}>ФИО:Кудайбердиева Аяна</h2>
            <h2>год рождения: 2008</h2>
            <p>цитата:Деньги не могут купить жизнь</p>
               
            <img src="/aiana.jpg" alt="" className='imgModal' />
            <button className='button1'   onClick={closeAiana}>закрыть</button> 
          </div>
        </div>
      )}


{kursant && (
        <div className="modal-overlay" onClick={closeKursant}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 style={{color: 'white'}}>ФИО:Абдувалиев Курсант</h2>
            <h2>год рождения: 2009</h2>
            <p>цитата:К сожелению тут нет цитаты. но он сам живая цитата</p>
               
            <img src="/kursant.jpg" alt="" className='imgModal' />
            <button className='button1'   onClick={closeKursant}>закрыть</button> 
          </div>
        </div>
      )}


{bibinur && (
        <div className="modal-overlay" onClick={closeBibinur}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 style={{color: 'white'}}>ФИО:Камчиева Бибинура</h2>
            <h2>год рождения: 2009</h2>
            <p>цитата:Единственный способ делать великое дело, это любить то, что вы делаете</p>
               
            <img src="/bibinur.jpg" alt="" className='imgModal' />
            <button className='button1'   onClick={closeBibinur}>закрыть</button> 
          </div>
        </div>
      )}


{adina && (
        <div className="modal-overlay" onClick={closeAdina}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 style={{color: 'white'}}>ФИО:Канатова Адина</h2>
            <h2>год рождения: 2008</h2>
            <p>цитата:Клуб романтики поздравляет вас с прохождением истории!</p>
               
            <img src="/adina.jpg" alt="" className='imgModal' />
            <button className='button1'   onClick={closeAdina}>закрыть</button> 
          </div>
        </div>
      )}


{aibike && (
        <div className="modal-overlay" onClick={closeAibike}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 style={{color: 'white'}}>ФИО:Турдубаева Айбийке</h2>
            <h2>год рождения: 2008</h2>
            <p>цитата:Поверь что ты можешь-иты уже прошел половину пути!</p>
               
            <img src="/aibike.jpg" alt="" className='imgModal' />
            <button className='button1'   onClick={closeAibike}>закрыть</button> 
          </div>
        </div>
      )}


{nuraiym && (
        <div className="modal-overlay" onClick={closeNuraiym}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 style={{color: 'white'}}>ФИО:Кудайбердиева Нурайым</h2>
            <h2>год рождения: 2008</h2>
            <p>цитата:Успех обычно приходит к тем, кто слишком занят,чтобы его просто ждать...</p>
               
            <img src="/nuraiym.jpg" alt="" className='imgModal' />
            <button className='button1'   onClick={closeNuraiym}>закрыть</button> 
          </div>
        </div>
      )}


{madinaA && (
        <div className="modal-overlay" onClick={closeMadinaA}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 style={{color: 'white'}}>ФИО:Амангельдиева Мадина</h2>
            <h2>год рождения: 2008</h2>
            <p>цитата:мои усилия заключались не в том, чтобы меня любили, а в том, что я любила.</p>
               
            <img src="/madinaA.jpg" alt="" className='imgModal' />
            <button className='button1'   onClick={closeMadinaA}>закрыть</button> 
          </div>
        </div>
      )}


{kanykei && (
        <div className="modal-overlay" onClick={closeKanykei}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 style={{color: 'white'}}>ФИО:Базантаева Каныкей</h2>
            <h2>год рождения: 2008</h2>
            <p>цитата:Лучшей местью являются огромный успех. </p>
               
            <img src="/kanykei.jpg" alt="" className='imgModal' />
            <button className='button1'   onClick={closeKanykei}>закрыть</button> 
          </div>
        </div>
      )}


{nurina && (
        <div className="modal-overlay" onClick={closeNurina}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 style={{color: 'white'}}>ФИО:Шакирова Нурина</h2>
            <h2>год рождения: 2008</h2>
            <p>цитата:Выпуск-это не конец, это только начало новой главы нашей жизни! </p>
               
            <img src="/nurina.jpg" alt="" className='imgModal' />
            <button className='button1'   onClick={closeNurina}>закрыть</button> 
          </div>
        </div>
      )}


{akmanai && (
        <div className="modal-overlay" onClick={closeAkmanai}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 style={{color: 'white'}}>ФИО:Ирисова Акманай</h2>
            <h2>год рождения: 2008</h2>
            <p>цитата:Плохой день можно исправить одной хорошей мной) </p>
               
            <img src="/akmanai.jpg" alt="" className='imgModal' />
            <button className='button1'   onClick={closeAkmanai}>закрыть</button> 
          </div>
        </div>
      )}


{marina && (
        <div className="modal-overlay" onClick={closeMarina}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 style={{color: 'white'}}>ФИО:Камбарова Марина</h2>
            <h2>год рождения: 2008</h2>
            <p>цитата:Меня ненавидели но мной хотели быть! </p>
               
            <img src="/marina.jpg" alt="" className='imgModal' />
            <button className='button1'   onClick={closeMarina}>закрыть</button> 
          </div>
        </div>
      )}


{elnura && (
        <div className="modal-overlay" onClick={closeElnura}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 style={{color: 'white'}}>ФИО:Канатова Элнура</h2>
            <h2>год рождения: 2008</h2>
            <p>цитата:Клуб романтики поздравляет вас с прохождением истории! </p>
               
            <img src="/elnura.jpg" alt="" className='imgModal' />
            <button className='button1'   onClick={closeElnura}>закрыть</button> 
          </div>
        </div>
      )}


{z && (
        <div className="modal-overlay" onClick={closeZ}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 style={{color: 'white'}}>ФИО:Султанбеков Жанболот</h2>
            <h2>год рождения: 2008</h2>
            <p>цитата:парой жизнь удивляет, парой оно поражает </p>
               
            <img src="/zhanbolot.jpg" alt="" className='imgModal' />
            <button className='button1'   onClick={closeZ}>закрыть</button> 
          </div>
        </div>
      )}


{batma && (
        <div className="modal-overlay" onClick={closeBatma}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 style={{color: 'white'}}>ФИО:Калбаева Батма</h2>
            <h2>год рождения: 2008</h2>
            <p>цитата:то, что мы говорим, ничто, по сравнению с тем, что мы чувствуем</p>
               
            <img src="/batma.jpg" alt="" className='imgModal' />
            <button className='button1'   onClick={closeBatma}>закрыть</button> 
          </div>
        </div>
      )}


{madina && (
        <div className="modal-overlay" onClick={closeMadina}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 style={{color: 'white'}}>ФИО:Кутпидинова Мадина</h2>
            <h2>год рождения: 2008</h2>
            <p>цитата:Тут должна быть красивая цитата, но красивая здесь только я</p>
               
            <img src="/madina.jpg" alt="" className='imgModal' />
            <button className='button1'   onClick={closeMadina}>закрыть</button> 
          </div>
        </div>
      )}


    </div>
  );
};

export default Main;
