import styled from "styled-components";

const CreditCard = () => {
  return (
    <Container>
      <CardBack>
        <p className="cvc">000</p>
      </CardBack>
      <CardFront>
        <img
          className="card-logo"
          src="/images/card-logo.svg"
          alt="Card Logo"
        />
        <p className="card-number">
          0000 <span className="text-space" /> 0000{" "}
          <span className="text-space" /> 0000 <span className="text-space" />{" "}
          0000
        </p>
        <p className="card-name">Jane Appleseed</p>
        <p className="card-exp-date">00/00</p>
      </CardFront>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  width: 100%;
  max-width: 344px;
  display: grid;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: 1190px) {
    top: 120px;
    left: 76%;
  }

  @media (min-width: 1400px) {
    top: 180px;
  }
`;

const Card = styled.div`
  height: 158px;
  width: 289px;
  background-image: url("/images/bg-card-back.png");
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;

  p {
    margin: 0;
    font-size: 11px;
    letter-spacing: 1px;
    color: var(--white);
  }

  @media (min-width: 1190px) {
    height: 205px;
    width: 370px;

    p {
      font-size: 13px;
    }
  }

  @media (min-width: 1400px) {
    height: 245px;
    width: 450px;

    p {
      font-size: 14px;
    }
  }
`;

const CardBack = styled(Card)`
  justify-self: right;

  .cvc {
    position: absolute;
    right: 36px;
    top: 72px;

    @media (min-width: 1190px) {
      top: 92px;
      right: 45px;
    }

    @media (min-width: 1400px) {
      top: 112px;
      right: 56px;
    }
  }

  @media (min-width: 1190px) {
    order: 2;
    left: 20%;
  }

  @media (min-width: 1400px) {
    height: 245px;
    width: 450px;
  }
`;

const CardFront = styled(Card)`
  background-image: url("/images/bg-card-front.png");
  bottom: 43%;
  z-index: 2;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr minmax(5px, max-content) minmax(5px, max-content);

  .card-logo {
    grid-column: 1 / 3;
    height: 30px;
    position: relative;
    bottom: 5px;

    @media (min-width: 1190px) {
      height: 40px;
      bottom: 0px;
    }

    @media (min-width: 1400px) {
      height: 50px;
    }
  }

  .card-number {
    grid-column: 1 / 3;
    font-size: 19px;
    text-align: center;
    margin-bottom: 15px;

    .text-space {
      margin-right: 2px;
    }

    @media (min-width: 1190px) {
      font-size: 24px;
      margin-bottom: 20px;
    }

    @media (min-width: 1400px) {
      font-size: 32px;
      margin-bottom: 36px;
    }
  }

  .card-name {
    text-transform: uppercase;
  }

  .card-exp-date {
    text-align: end;
  }

  @media (min-width: 1190px) {
    bottom: 0;
    justify-self: right;
    margin-bottom: 35px;
  }
`;

export default CreditCard;