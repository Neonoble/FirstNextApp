import AllEvents from '@/src/components/events/events-page'
import Link from 'next/link'

const EventsPage = ({data}) => {
    return <AllEvents data={data}/>
   }
   
   export const getStaticProps = async()  => {
       const {events_categories} = await import('/data/data.json')
         return{
             props:{
                 data:events_categories,
             }
           }
       }
   export default EventsPage;