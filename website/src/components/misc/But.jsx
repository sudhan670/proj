export function But(props) {
  return (
    <button
      className="navbar-toggler trans rmBor"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
      onClick={props.ham}
      id="ham"
    >
      {props.burger ? (
        <i className="fa fa-bars btn btn-primary"></i>
      ) : (
        <i className="fa fa-times btn btn-primary"></i>
      )}
    </button>
  );
}
