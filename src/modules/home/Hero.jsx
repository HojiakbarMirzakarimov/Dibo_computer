import HeroIcon from '../../assets/images/hero.png'
export default function Hero() {
  console.log('HeroIcon:', HeroIcon);

  return (
    <section className="Hero__section">
      <div className='hero__wrapper' style={{ paddingLeft: '61px', paddingRight: '66px' }}>
        <div className='hero__bg' style={{
          backgroundImage: `url(${HeroIcon})`,
          width: '100%',
          height: '550px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          border: '3px solid red',
        }}>
        </div>
      </div>
    </section>

  )
}
