const Breadcrumbs = () => {
  return (
    <div className="csBreadCrumb container">
      {/* TODO: Make reachable with link  */}
      CicekSepeti Market {' > '} Istanbul {' > '}
      <span className="csBreadCrumb__link--active">CiceksepetiBreadCrumb</span>
    </div>
  );
};

export default Breadcrumbs;
