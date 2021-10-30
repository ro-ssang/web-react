import React from 'react';
import Header from '../include/Header';
import Contents from '../include/Contents';
import Footer from '../include/Footer';
import WrapTitle from '../include/Wraptitle';
import Loader from '../include/Loader';
import axios from 'axios';
import ReferInfo from '../info/ReferInfo';

class Reference extends React.Component {
  state = {
    isLoading: true,
    refers: [],
  };

  getRefer = async () => {
    const {
      data: {
        data: { htmlRefer },
      },
    } = await axios.get('https://webstoryboy.github.io/react5001/src/assets/json/refer.json');
    this.setState({ isLoading: false, refers: htmlRefer });
  };

  componentDidMount() {
    setTimeout(() => {
      this.getRefer();
    }, 2000);
  }

  render() {
    const { isLoading, refers } = this.state;

    return (
      <div>
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            <Header />
            <Contents>
              <section id="referCont">
                <div className="container">
                  <WrapTitle text={['reference', 'book']} />
                  <div className="refer__cont">
                    <div className="table">
                      <h3>HTML</h3>
                      <ul>
                        {refers.map((refer) => (
                          <ReferInfo
                            key={refer.id}
                            id={refer.id}
                            title={refer.title}
                            desc1={refer.desc1}
                            desc2={refer.desc2}
                            element={refer.element}
                            tag={refer.tag}
                            version={refer.version}
                            view={refer.view}
                            use={refer.use}
                            definition={refer.definition}
                          />
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </Contents>
            <Footer />
          </div>
        )}
      </div>
    );
  }
}

export default Reference;
