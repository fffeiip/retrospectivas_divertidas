import { useState } from "react";
import { useFormik } from "formik";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { remove } from "lodash";

interface Pessoa {
  nome: string;
  key: string;
}

type Props = {
  participante?: Pessoa;
  className?: string;
  participantes?: Pessoa[];
  setParticipantes?: Function;
  removeDaLista? : Function;
};

function Dashboard() {
  // eslint-disable-next-line
  const [participantes, setParticipantes] = useState<Pessoa[]>([
    {
      key: Math.random().toString(36).substring(7),
      nome: "Fulao1 nome grande da silva muito grandemuito grandemuito grandemuito grandemuito grandemuito grandemuito grande",
    },
    { key: Math.random().toString(36).substring(7), nome: "Fulano2" },
  ]);
  return (
    <div className="flex flex-row bg-green-100 h-full">
      <div className="flex flex-col">
          <div className="border-black border-2">

        <Formulario setParticipantes={setParticipantes} participantes={participantes} />
        <ContainerParticipantes
          className="flex min-w-max border-black border-2"
          participantes={participantes}
          setParticipantes={setParticipantes}
          />
          </div>
      </div>
      <p className="text-black flex">Dashboard</p>
    </div>
  );
}

function Formulario(props: Props) {
  const { setParticipantes } = props;
  const participantes = props.participantes || [];
  const formik = useFormik({
    initialValues: {
      nome: "",
    },
    onSubmit: (values) => {
        let novo_participante = {
            id: Math.random().toString(36).substring(7),
            nome: values.nome
        }
      if (setParticipantes) setParticipantes([...participantes, novo_participante]);
      formik.resetForm()
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
      <ListaParticipantes participantes={participantes} setParticipantes={setParticipantes} />
    </div>
  );
}

function ListItem(props: Props) {
  let { participante,removeDaLista } = props;
  const removeItem = (hash : string | undefined) => {
      return removeDaLista && removeDaLista(hash)
  }
  return (
    <li className="text-black flex justify-between flex-row text-center w-full border-black m-0.5 border-2">
      <p className="flex w-full justify-center ">{participante?.nome}</p>
      <FontAwesomeIcon className="flex h-full" icon={faTrash} onClick={removeItem(participante?.key)}/>
    </li>
  );
}

function ListaParticipantes(props: Props) {
  let { participantes, setParticipantes } = props;
  const removeDaLista = (hash: String) => {
    let nova_lista = participantes?.filter(elem => elem.key !== hash);
    if(setParticipantes) setParticipantes(nova_lista)
  }

  return (
    <ul className="flex flex-col p-0 max-w-xs  w-full flex-nowrap">
      {participantes?.map((participante) => (
        <ListItem key={participante.key} participante={participante} removeDaLista={removeDaLista}/>
      ))}
    </ul>
  );
}

export default Dashboard;
