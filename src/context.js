import React, { Component } from 'react'
import items from './data'
const CleanerContext = React.createContext();

class CleanerProvider extends Component {
    state = {
        cleaners: [],
        sortedCleaners: [],
        featuredCleaners: []
    };
    //getData
    componentDidMount() {
        let cleaners = this.formatData(items);
        //console.log(cleaners);
        let featuredCleaners = cleaners.filter(cleaner => cleaner.featured
            === true);
        this.setState({
            cleaners, featuredCleaners, sortedCleaners:cleaners
        })
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image =>
                image.fields.file.url);
            
            let cleaner = { ...item.fields, images: images, id };
            return cleaner;
        });
        return tempItems;
    }

    render() {
        return (
            <div>
                <CleanerContext.Provider value={{...this.state}}>
                    {this.props.children}
                </CleanerContext.Provider>
            </div>
        )
    }
}
const CleanerConsumer = CleanerContext.Consumer;

export { CleanerProvider, CleanerContext, CleanerConsumer };









// import React, { Component } from 'react'
// import items from './data.js'

// const CleanerContext = React.createContext();
// //<RoomContext.Provider value={}
//  class CleanerProvider extends
//     Component{
//      state = {
//          cleaners: [],
//          sortedCleaners: [],
//          featuredCleaners: [],
//          price: 0,
//          minPrice: 0,
//          maxPrice: 0,
//          location:null,
//          supplies: false,
//          equipments:false,
         

//      }
//      //getData
//      componentDidMount() {
//          let cleaners = this.formatData(items);
//         console.log(cleaners);
//          let featuredCleaners = cleaners.filter(cleaner => cleaner.featured === true);
//          let maxPrice = Math.max(...cleaners.map(item => item.price));
//          let maxSize = Math.max(...cleaners.map(item => item.size));

//          this.setState({
//              cleaners,
//              featuredCleaners,
//              sortedCleaners: cleaners,
//              loading: false,
//              price: maxPrice,
//              maxPrice,
//              maxSize 
//          });
//      }
//      formatData(items) {
//          let tempItems = items.map(item => {
//              let id = item.sys.id
//              let images = item.fields.images.map(image => image.fields.file.url);

//              let room={...item.fields,images,id}
             
//              return room;
//          });
//          return tempItems;
//      }

//      getCleaner = (slug) => {
//          let tempCleaners = [...this.state.cleaners];
//          const cleaner = tempCleaners.find(cleaner => cleaner.slug === slug);
//          return cleaner;
//      };

//      handleChange = event => {
//          const target = event.target;
//          const value = event.type === 'checkbox' ?
//              target.checked : target.value;
//          const type = event.target.type;
//          const name = event.target.name;
//          this.setState({
//              [name]: value
//          }, this.filterCleaners);
//          //  console.log(`this is type:${type},
//          //   this is name: ${name}, 
//          //   this is value: ${value}`);
//      };

//     //  filterCleaners = () => {
//     //      let {
//     //          cleaners, type, price, minPrice,
//     //          minSize, breakfast, pets
//     //      } = this.state;
//     //      //all the rooms
//     //      let tempCleaners = [...cleaners];
//     //      //transform values
//     //      price = parseInt(price);

//     //      //filter by type
//     //      if (type !== "all") {
//     //          tempCleaners = tempCleaners.filter(cleaner => cleaner.type ===
//     //              type);
//     //      }
//     //      //filter by price
//     //      tempCleaners = tempCleaners.filter(cleaner => cleaner.price <= price);
//     //      //filter by size
//     //     //  tempCleaners = tempCleaners.filter(cleaner => cleaner.size >= minSize && room.size <= maxSize);
//     //      //change State

//     //      this.setState({
//     //          sortedCleaners: tempCleaners
//     //      });
//     //  }
//     render() {
//         return (
//             <CleanerContext.Provider value={{
//                 ...this.state,
//                 getCleaner: this.getCleaner,
//                 handleChange: this.handleChange
//             }}>
//            {this.props.children} 
//         </CleanerContext.Provider>
//     )
// }
// }

// const CleanerConsumer = CleanerContext.Consumer;


// export function withCleanerConsumer(Component) {
//     return function ConsumerWrapper(props) {
//         return <CleanerConsumer>
//             {value =><Component {...props} context={value}/> }
//         </CleanerConsumer>
//     }
// }
// export { CleanerProvider, CleanerConsumer, CleanerContext };