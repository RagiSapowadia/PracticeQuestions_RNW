import React, {useRef} from 'react'

export default function TodoUsingUseRef() {
    const nameRef = useRef(null)

    function submitForm(e){
        e.preventDefault()
        console.log({
            name: nameRef.current.value
        })
    }
  return (
    <div>
      <form onSubmit={submitForm}>
        <input type="text" name='name' ref={nameRef} />
        <input type="submit" />
      </form>
    </div>
  )
}
