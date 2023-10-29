import PokerCard from '../PokerCard';
import './poker.scss';
const Poker = () => {
  const storyPoints = [0, '1/2', 1, 2, 3, 5, 8, 13, '?', '☕️']
  const cards = storyPoints.map((storyPoint, index) => {
    return <PokerCard number={storyPoint} key={storyPoint} />
  })
  return (
    <div class="flex flex-row gap-4 sm:gap-8 lg:gap-10 my-5">
      <div class="basis-4/5 flex flex-row flex-wrap gap-4 py-5 bg-cyan-300 justify-around">
        {cards}
      </div>
      <div class="basis-1/5 bg-pink-300">
        asfasdf
      </div>
    </div>
  )
}

export default Poker