import React, { useState, useEffect } from "react";
import DynamicFaIcon from "../DynamicFaIcon";
import axios from "../../axios";

// import { MissionModalData } from "../MissionModal/MissionModalData";

import {
  CardWrapper,
  CardButton,
  SubjectIconSection,
  Background,
  Progress,
  ProgressContainer,
  ClickableArea,
} from "./subject-card-styling";

import { MissionModal } from "../MissionModal";

//#Comentário geral: não vamos usar "modais" para as missões, o container onde aparece a árvore de assuntos deve ter o seu
//#conteudo trocado para o conteudo da missão. No lado direito do container com a subject vai terão algumas outras informações
//#como ranking, level, ect. Quando o container mudar para as coisas da missão, essas informações laterais citadas
//#anteriormente devem sumir. Ainda não foi discutido sobre animações normais ou animações de carregamento.

//#Seria bom revisar as funções, parece ter algumas coisas desnecessárias.

const SubjectCard = ({ subject }) => {

  const [showModal, setShowModal] = useState(false);
  const [currentMission, setCurrentMission] = useState();
  
  //#Talvez valesse a pena armazenar apenas o completedMission
  const [completionRate, setCompletionRate] = useState(0.0);
  //#Talvez seja melhor dividir em mais estados
  const [showSubject, setShowSubject] = useState(subject);

  const openMissionModal = () => {
    setShowModal((prev) => !prev);
  };


  //#Subdividir em funções menores ou algo do tipo

  const loadData = async () => {
    try {
      const res = await axios.post("/missions/getFirstAvailableMission", {
        subjectId: subject.id,
      });

      setCurrentMission(res.data);
      //#Usou a props no lugar da showSubject
      setCompletionRate(
        (subject.completedMissions / subject.allMissions) * 100.0
      );
    } catch (err) {
      console.log("error when loading current Mission!");
    }
  };

  /**
   * Loading next available mission of this Subject
   */
  useEffect(() => {
    loadData();
  }, []);

  /**
   * load Subject Card data once one mission is completed
   */

  //#handleCallback é um nome genérico de mais, não diz direito o que a função faz! 
  const handleCallback = async () => {
    loadData();

    try {
      const res2 = await axios.post("/subjects/getSubjectById", {
        id: subject.id,
      });

      setShowSubject(res2.data);
      //#Usa a showSubject no lugar da props
      setCompletionRate(
        (showSubject.completedMissions / showSubject.allMissions) * 100.0
      );

      console.log(res2.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <MissionModal
        missionData={currentMission}
        showModal={showModal}
        setShowModal={setShowModal}
        parentCallback={handleCallback} //#parentCallback é um nome genérico de mais, não diz direito o que a função faz. 
      />

      <CardWrapper>
        <ClickableArea onClick={openMissionModal}>
          <SubjectIconSection>
            <DynamicFaIcon name={showSubject.icon} iconSize={80} />
          </SubjectIconSection>
          <CardButton>{showSubject.name}</CardButton>
        </ClickableArea>

        <ProgressContainer>
          <Background />
          <Progress percent={completionRate} />
        </ProgressContainer>
      </CardWrapper>
    </>
  );
};

export default SubjectCard;
