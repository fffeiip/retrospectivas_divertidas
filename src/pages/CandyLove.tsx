import { useState } from "react";
import { useFormik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { indexOf } from "lodash";

interface Pessoa {
  nome: string;
  key: string;
}

interface SelectedPersons {
  [key: string]: string[];
}

interface CandyLoveD {
  [key: string]: any;
}

type Props = {
  participante?: Pessoa;
  className?: string;
  participantes?: Pessoa[];
  setParticipantes?: Function;
  removeDaLista?: Function;
};

function CandyLove() {
  const colors = ["red", "yellow", "green", "purple", "blue", "orange"];
  const [currentColor, setCurrentcolor] = useState<string>("gray");
  const [alreadyPicked, setAlreadyPicked] = useState<SelectedPersons>({});
  const [currentPerson, setCurrentPerson] = useState<Pessoa | any>();
  const [participantes, setParticipantes] = useState<Pessoa[]>([]);
  
  const candylove: CandyLoveD = {
    red: {
      color: "bg-red-300",
      hoverColor: "hover:bg-red-700",
      instruction: "One thing that you love about your job.",
    },
    yellow: {
      color: "bg-yellow-500",
      hoverColor: "hover:bg-yellow-700",
      instruction: "A life goal you are working on.",
    },
    green: {
      color: "bg-green-500",
      hoverColor: "hover:bg-green-700",
      instruction: "Your favorite book or movie.",
    },
    purple: {
      color: "bg-purple-500",
      hoverColor: "hover:bg-purple-700",
      instruction: "Favorite way to revive yourself during the workday.",
    },
    blue: {
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-700",
      instruction:
        "One stressful thing about your job you wish you could improve.",
    },
    orange: {
      color: "bg-yellow-700",
      hoverColor: "hover:bg-yellow-900",
      instruction: "Your favorite food.",
    },
    gray: {
      color: "bg-gray-500",
      hoverColor: "hover:bg-gray-700",
    },
  };

  function pickOneColor(person : Pessoa) {
    let next_colors = colors.reverse().filter((e) => {
      let cor_nao_selecionada = indexOf(alreadyPicked[person.key], e) < 0;
      let nenhum_selecionado = alreadyPicked === undefined;
      return nenhum_selecionado || cor_nao_selecionada;
    });
    return next_colors[Math.floor(Math.random()) * next_colors.length];
  }

  function pickOnePerson() {
    let next_person = participantes.filter((e) => {
      let ainda_falta_cor = alreadyPicked[e.key]?.length < colors.length;
      let nenhum_selecionado = alreadyPicked === undefined;
      let chave_nao_selecionada = alreadyPicked[e.key] === undefined;
      let not_last_person = e.key !== currentPerson?.key;
      return not_last_person && ( nenhum_selecionado || chave_nao_selecionada || ainda_falta_cor);
    });
    return next_person[Math.floor(Math.random()) * next_person.length];
  }

  function randomPick() {
    
    let person =  pickOnePerson()
    let color = !!person ? pickOneColor(person) : "gray";
    let picked: SelectedPersons = { ...alreadyPicked };
    let new_colors = picked[person?.key] !== undefined ? [...picked[person?.key], color] : [color]
    picked[person?.key] = new_colors
    
    if(picked) {
      setAlreadyPicked(picked);
    }
    if(color) {
      setCurrentcolor(color);
    } 
    if(person) {
      setCurrentPerson(person);
    }
  }

  return (
    <div className="flex flex-row bg-green-100 h-full">
      <div className="flex flex-col">
        <div className="p-3 m-5">
          <Formulario
            setParticipantes={setParticipantes}
            participantes={participantes}
          />
          {participantes.length > 0 && (
            <ContainerParticipantes
              className="flex min-w-max border-black border-2 p-3 m-2"
              participantes={participantes}
              setParticipantes={setParticipantes}
            />
          )}
        </div>
      </div>
      <div className="w-full h-full flex-col flex p-3 m-5 items-center justify-top">
      <h1 className="text-black mx-4 text-4xl text-center">
            Candy Love
          </h1>
        {!!currentPerson && (
          <h1 className="text-black mx-4 text-2xl text-center">
            {currentPerson.nome}
          </h1>
        )}
        <span
          className={`${candylove[currentColor].color} ${candylove[currentColor].hoverColor} w-96 h-96 items-center flex justify-center m-10 rounded-full`}
        >
          <p className="text-black p-5">{candylove[currentColor].instruction}</p>
        </span>
        <button
          className={`
          ${candylove[currentColor].color} ${candylove[currentColor].hoverColor} text-white font-bold p-2 rounded focus:outline-none focus:shadow-outline
          `}
          type="button"
          onClick={() => randomPick()}
        >
          {!!currentPerson ? "Selecionar Novamente" : "Selecionar"}
        </button>
      </div>
    </div>
  );
}

function Formulario(props: Props) {
  const { setParticipantes } = props;
  const participantes = props.participantes || [];
  const formik = useFormik({
    initialValues: {
      nome: "",
      key: "",
    },
    onSubmit: (values) => {
      let novo_participante = {
        key: Math.random().toString(36).substring(Math.random()),
        nome: values.nome,
      };
      if (setParticipantes)
        setParticipantes([...participantes, novo_participante]);
      formik.resetForm();
    },
    validate: (values) => {
      if (values.nome.length === 0) {
        let error = { erro: "precisa ser maior que um" };
        return error;
      }
    },
  });
  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        className="text-black bg-green-100 rounded px-8 py-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="nome"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Novo Participante
          </label>
          <input
            autoComplete="off"
            type="text"
            name="nome"
            id="nome"
            className="bg-green-50 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            value={formik.values.nome}
            onChange={formik.handleChange}
          />
        </div>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Adicionar
        </button>
      </form>
    </div>
  );
}

function ContainerParticipantes(props: Props) {
  let { className, participantes, setParticipantes } = props;
  return (
    <div className={className}>
      <ListaParticipantes
        participantes={participantes}
        setParticipantes={setParticipantes}
      />
    </div>
  );
}

function ListItem(props: Props) {
  let { participante, removeDaLista } = props;
  const removeItem = (key?: string) => {
    if (removeDaLista && key && key.length > 0) removeDaLista(key);
  };
  return (
    <li className="text-black flex justify-between flex-row text-center w-full border-black m-0.5 p-2 border-2">
      <p className="flex w-full justify-center ">{participante?.nome}</p>
      <FontAwesomeIcon
        className="flex h-full"
        icon={faTrash}
        onClick={() => removeItem(participante?.key)}
      />
    </li>
  );
}

function ListaParticipantes(props: Props) {
  let { participantes, setParticipantes } = props;
  const removeDaLista = (hash: String) => {
    let nova_lista = participantes?.filter((elem) => elem.key !== hash);
    if (setParticipantes) setParticipantes(nova_lista);
  };

  return (
    <ul className="flex flex-col p-0 max-w-xs  w-full flex-nowrap">
      {participantes?.map((participante) => (
        <ListItem
          key={participante.key}
          participante={participante}
          removeDaLista={removeDaLista}
        />
      ))}
    </ul>
  );
}

export default CandyLove;
