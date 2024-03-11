import './PageHeading.style.scss';

interface IHeading {
  title: string,
  description?: string,
}

const PageHeading = ({ title, description }: IHeading) => {
  return (
    <div className='pageHeading'>
      <h1 className='pageTitle'>{title}</h1>
      {description && <p className='pageDescription'>{description}</p>}
    </div>
  );
}

export default PageHeading;