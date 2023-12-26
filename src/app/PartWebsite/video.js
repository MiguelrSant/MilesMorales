export default function Video () {
    return (
    <section className="bg-video">
        <video autoPlay  muted loop >
          <source src="/spiderman2.mp4" type='video/mp4'/>
        </video>
      </section>
    )
}