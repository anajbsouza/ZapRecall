import seta_play from '../assets/seta_play.png';
import icone_erro from '../assets/icone_erro.png';
import icone_quase from '../assets/icone_quase.png';
import icone_certo from '../assets/icone_certo.png';

export default function IconState({ status, funcShowQuestion }) {
    return (
        <>
            {status === "zap" && <img src={icone_certo} alt="Ícone zap" />}
            {status === "right" && <img src={icone_quase} alt="Ícone certo" />}
            {status === "wrong" && <img src={icone_erro} alt="Ícone errado" />}
            {status === "not answered" && <img onClick={funcShowQuestion} src={seta_play} alt="Ícone play" data-test="play-btn"/>}
        </>
    )
}