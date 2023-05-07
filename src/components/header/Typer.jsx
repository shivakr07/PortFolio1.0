import "./Typer.css";

import TypeWriterEffect from 'react-typewriter-effect';

export default function Typer() {
  return (
    <div className="Typer">
      
        <span >
      <TypeWriterEffect className="typer"
        textStyle={{
          fontSize:'1rem',
          color: '#fff',
          fontWeight: 500,
          textAlign: "center",
        }}
        startDelay={2000}
        cursorColor="#3F3D56"
        multiText={[
          'a fullstack dev...',
          'an Ml enthusiast...',
          'a student of computer science artificial intelligence',
          
        ]}
        loop={true}
        nextTextDelay={1000}
        typeSpeed={30}
      />
        </span>
    </div>
  );
}
