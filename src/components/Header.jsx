import Button from "./Button"
const Header = ({ titulo, onAdd, mostrarForm }) => {

  return (
    <header className="header">
      <h1 style={{ color: "black" }}>{titulo}</h1>
      <Button texto={mostrarForm ? "Cerrar" : "Agregar"} color={mostrarForm ? "gray" : "black"} onClick={onAdd} />
    </header>
  )
}
export default Header