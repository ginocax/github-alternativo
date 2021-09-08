import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

function Profile() {
    const {usuario = 'ginocax' } = useParams();
  const [profile, setProfile] = useState({});
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
      setShowProfile(true)
      console.log(profile);
  }, [profile]);

  useEffect(() =>{
      fetch(`https://api.github.com/user/${usuario}`, {
      headers: {
          'Authorization': 'token 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'
      }
    })
    .then(resposta => resposta.json())
    .then(resposta => setProfile(resposta))
    .catch(error => window.alert('Erro'));
  }, [usuario])

  return (
    <main>
      {!showProfile &&
        (
          <div className="d-flex justify-content-center align-items-center">
            <div class="spinner-grow" role="status">
              <span class="visually-hidden">Carregando...</span>
            </div>
          </div>
        )
      }
      {showProfile &&
        (
          <>
            <h1>{profile.login}</h1>
            <p>{profile.bio}</p>
            <img src={profile.avatar_url}/>
          </>
        )
      }
    </main>
  )
}

export default Profile;