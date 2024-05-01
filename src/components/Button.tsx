type btnINertFace = {
  clsBtn: string;
  btnName: string;
};

function Button({ clsBtn, btnName }: btnINertFace) {
  return (
    <>
      <button className={` btn ${clsBtn}`}>{btnName}</button>
    </>
  );
}

export default Button;
