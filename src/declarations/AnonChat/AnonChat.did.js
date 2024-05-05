export const idlFactory = ({ IDL }) => {
  const chat = IDL.Record({ 'sender' : IDL.Text, 'message' : IDL.Text });
  return IDL.Service({
    'createNewRoom' : IDL.Func([IDL.Text], [], ['oneway']),
    'getMessage' : IDL.Func([IDL.Text], [IDL.Vec(chat)], []),
    'sendMessage' : IDL.Func([IDL.Text, IDL.Text, IDL.Text], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
