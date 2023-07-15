import logo from './imag/rabbilVai.png'
const Content = () => {
    return (
        <div className='' id='Content'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was popularised in the
                1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
                more recently with desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
            </p> 
     <div className="container ">
         <div className="row">
          <div className="col-md-6">
           <h3 id='body'>Learn Something Good, Do Something Better</h3>
           <p>Learn With Rabbil is a top leading edutech platform for software development. We provide online courses for majors in mobile & web development. Research & development, teaching, and community leading is our vision . Our specialty is industry-oriented teaching processes, guidelines, study plans, and classes with resourceful content. Learn confidently with us software industry needs quality developers
            Rabbil Hasan is our core instructor. He is working on web & mobile application development for more than 8 years. He started his programming instructor career at Bangladesh ICT Ministry in a software development program. After that, he plays a great role as a software development instructor at CBA-IT, STEPUP-IT, TexLab, and Northbengal IT. Presently he is working at IDLC Finance Ltd as a senior software engineer. Working with country-leading fintech solutions.</p>
          </div>
          <div className="col-md-6">
            <img src={logo} alt="" />
          </div>
         
        </div>
      </div>
  
        </div>
       
       
    
    );
};

export default Content;

