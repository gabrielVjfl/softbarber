import React, {createContext, useState} from 'react'

type ClienteType = {
  token: any;
  auth: string;
  dados: string,
}

type PropsClienteContext = {
  state: ClienteType;
  setState: React.Dispatch<React.SetStateAction<ClienteType>>
};

const DEFAULT_VALUE = {
  state: {
    token: "",
    auth:  "",
    dados: "",

  },
  setState: () => {},
};

const ClienteContext = createContext<PropsClienteContext>(DEFAULT_VALUE);

const ClienteProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state)

  return (
    <ClienteContext.Provider value={{state, setState}}>
     {children}
    </ClienteContext.Provider>
  )
}
export { ClienteProvider }
export default ClienteContext