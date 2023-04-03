import CatEvent from '@/src/components/events/catEvent';
import Link from 'next/link';


 const EventCatergoryPage = ({data, pageName}) => <CatEvent data={data} pageName={pageName}/>
    
export default EventCatergoryPage;

export const getStaticPaths = async() => {
    const {events_categories} = await import('/data/data.json')
    const allPaths = events_categories.map((ev) => {
        return {
            params: {
                catergory:ev.id.toString()
            }
        }
    })

    return {            
           paths:allPaths,
           fallback:false,
       }           
  }

  export const getStaticProps = async(context) => {
     const id = context?.params.catergory;
    const {allEvents} = await import('/data/data.json')
   
    const data = allEvents.filter((ev) => ev.city === id);
    console.log('Data :',data);
 
    return{
        props:{
            data,//same as saying data.data ,same name
            pageName:id
        }
    };
  }