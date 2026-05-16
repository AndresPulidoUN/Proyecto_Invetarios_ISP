function Login() {
  return (
    <div>
      <h2>Login</h2>

      <form>
        <input type="email" placeholder="Correo" />
        <br /><br />

        <input type="password" placeholder="Contraseña" />
        <br /><br />

        <button type="submit">
          Ingresar
        </button>
      </form>
    </div>
  )
}

export default Login