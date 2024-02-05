# namaste react 
# lesson 1:
- using cdn links of react, created element
# lesson 2:
- introduction of parcel(bundler), package.json, node modules, npms.
- Ran proj using npx parcel.html
    ## parcel
    - dev build
    - local server
    - HMR- Hot module replacement
    - File watching algo - written in c++
    - Caching - faster build
    - image optimization
    - minification
    - bundling
    - compress
    - consistent hashing
    - code splitting
    - differential bundling - supports older browsers
    - diagnostic
    - err handling
    - https
    - tree shaking - remove unwanted code
    - diff dev and prod builds

# Food ordering app
 * Header
 *  -Logo
 *  -Nav Items
 * Body
 *  -Search
 *  -RestaurantCountainer
 *  -RestaurantCard
 *      -img
 *      -name of res, star rating, cuisines, Eta
 * Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -Contact


# Default Export/Import
export default comp/var;
import comp from "path";

# Named export/import
export const comp/var;
import {comp} from "path";

# Tailwind config
https://tailwindcss.com/docs/guides/parcel

# Redux Toolkit(RKT)
    - install @reduxjs/toolkit and react-redux
    - Build our store
    - Connect store to app
    - create slice(cartSlice)
    - dispatch(action)
    - Selector