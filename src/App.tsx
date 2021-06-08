import Header from './components/Header'

function App() {
  return (
    <div className="h-screen flex-col text-white">
      <Header/>
      <div className="bg-green-300 min-h-screen  flex items-center justify-center">
        <p className="mx-4 text-4xl text-center">
          2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit vitae enim sit amet auctor. Nulla commodo egestas neque a tincidunt. Sed ornare ante vitae dolor tincidunt, eu aliquam diam molestie. Pellentesque vel mauris maximus, vulputate turpis sit amet, dignissim sapien. Phasellus non ex luctus arcu convallis venenatis. Pellentesque semper venenatis nibh vestibulum placerat. Fusce lacinia fringilla ante, eu scelerisque sapien aliquet ac. Curabitur viverra eu justo in commodo. Integer sit amet malesuada neque, eget finibus risus. 
        </p>
      </div>
      <div className="bg-green-500 min-h-screen  flex items-center justify-center">
        <p className="mx-4 text-4xl text-center">
          Morbi at massa mi. Ut a dictum felis. Fusce augue ex, pharetra vel sapien sed, placerat scelerisque erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed et mollis tortor. Suspendisse varius ante elit, nec suscipit velit ultrices in. Maecenas mattis dolor non augue molestie maximus. Etiam posuere porta mauris vitae blandit. Integer id sodales ex. Etiam et ligula eu risus varius vestibulum vitae ac turpis. Fusce facilisis sagittis tincidunt. Ut at massa quis nunc ultricies viverra. Fusce aliquam arcu massa. Curabitur est quam, semper vitae enim laoreet, finibus rutrum massa. Praesent ultricies tortor felis, non vulputate augue mattis sed.
        </p>
      </div>
      <div className="bg-green-100 min-h-screen  text-black flex items-center justify-center">
        <p className="mx-4 text-4xl text-center">
          Etiam finibus nulla ac elit euismod, vitae tincidunt mauris commodo. Cras id consectetur est. Nullam volutpat magna et pellentesque varius. Donec hendrerit vulputate tortor sit amet venenatis. Pellentesque vel nulla mauris. Curabitur sed congue nisi. Phasellus at gravida libero. Nulla pellentesque lacus gravida mattis ornare.
        </p>
      </div>
    </div>
  );
}

export default App;
