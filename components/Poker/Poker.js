import PokerCard from '../PokerCard';
import './poker.scss';
const Poker = () => {
  // 20, 40, 100, '∞',
  const storyPoints = [0, '1/2', 1, 2, 3, 5, 8, 13, '❓', '☕️']
  const cards = storyPoints.map((storyPoint, index) => {
    return <PokerCard number={storyPoint} key={storyPoint} />
  })
  return (
    <div className="flex flex-row gap-4 sm:gap-4 lg:gap-10 my-5">
      <div className="basis-2/5  p-4 bg-white border border-gray-200 rounded">
        
      </div>
      <div className="basis-3/5 flex flex-row flex-wrap gap-4 justify-around">
        {cards}
      </div>
    </div>
  )
}

export default Poker