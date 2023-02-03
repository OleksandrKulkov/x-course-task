export function SpecificBook({ book }) {
  return (
    <main>
      <section className="book-content">
        <div className="book-image">
          <img src={book.src} alt={book.title} />
        </div>
        <div className="book-information">
          <h1>{book.title}</h1>
          <p>
            <strong>Book author: </strong>
            {book.author}
          </p>
          <p>
            <b>Book level:</b> Advanced
          </p>
          <p>
            <b>Book tags:</b> core
          </p>
        </div>
        <div className="book-order">
          <div className="price-block">
            <div className="book-price">
              <p className="p-price">
                Price, $
                <span id="single-price" className="price">
                  {book.price}
                </span>
              </p>
            </div>
            <form
              id="order-form"
              className="order-form"
              action="/send-quantity"
              method="post"
            >
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                max="42"
              />
            </form>
            <div className="book-total-price">
              <p>
                Total price, $
                <span id="total-price" className="price">
                  52.72
                </span>
              </p>
            </div>
          </div>
          <button className="button-order-submit" type="submit">
            Add to cart
          </button>
        </div>
      </section>
      <div className="book-description">
        <h3 className="h3-description">Book description:</h3>
        <p>
          JavaScript is the little scripting language that could. Once used
          chiefly to add interactivity to web browser windows, JavaScript is now
          a primary building block of powerful and robust applications. In this
          practical book, new and experienced JavaScript developers will learn
          how to use this language to create APIs as well as web, mobile, and
          desktop applications.
        </p>
        <p>
          Author and engineering leader Adam D. Scott covers technologies such
          as Node.js, GraphQL, React, React Native, and Electron. Ideal for
          developers who want to build full stack applications and ambitious web
          development beginners looking to bootstrap a startup, this book shows
          you how to create a single CRUD-style application that will work
          across several platforms.
        </p>
        <ul>
          <li>Explore GraphQ's simple process for querying data</li>
          <li>
            Learn about shared authentication for APIs, web apps, and native
            applications
          </li>
          <li>
            Build performant web applications with React and Styled Components
          </li>
          <li>
            Use React Native to write cross-platform applications for iOS and
            Android that compile to native code
          </li>
          <li>Learn how to write desktop applications with Electron</li>
        </ul>
      </div>
    </main>
  );
}
