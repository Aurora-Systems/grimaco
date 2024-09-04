
// Example SVG component
const StarSVG = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-warning" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="currentColor"/>
  </svg>
);

// Component to repeat the SVG
const RepeatSVG=(props:{ times:number })=> {
  // Create an array with the SVG repeated `times` number of times
  const svgElements = Array.from({ length: props.times }, (_, i) => (
    <StarSVG key={i} />
  ));

  return <div  style={{ display: 'flex', gap: '5px', justifyContent:'center' }}>{svgElements}</div>;
}

function Star() {
  return (
    <div className="w-100 text-center">
      <RepeatSVG times={5} />
    </div>
  );
}

export default Star;
