const DeleteDatabase = async (_id: string, when: string, dispatch: any, updateProducts: any) => {
  try {
    await fetch(`http://192.168.0.10:3005/date/${_id}/${when.toLowerCase()}`, {
      method: "DELETE",
    });
    dispatch(updateProducts())
  } catch (e) {
    console.log("error", e);
  }
};

export default DeleteDatabase;
