import SingleEvent from '@/src/components/events/single-event';

const singleEvent = ({data}) => <SingleEvent data={data}/>

export const getStaticPaths = async() => {
  const data = await import('/data/data.json');
  const allEvents = data.allEvents;

  const allPaths = allEvents.map((path) => {
    return{
        params:{
            catergory: path.city,
            id: path.id //id === the file name [id].js
        }
     }
   })

    return{
        paths:allPaths,
        fallback:false,
    }
}

export const getStaticProps = async(context) => {
    const id = context.params.id;
   const {allEvents} = await import('/data/data.json')
  
   const eventData = allEvents.find((ev) => id === ev.id);
   
   return{
       props:{
           data:eventData         
       }
   };
 }  
export default singleEvent;