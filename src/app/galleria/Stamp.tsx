import React from 'react'

const Stamp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 250 250'
    {...props}
  >
    <path
      fillRule='evenodd'
      d='M0 0h.203H0Zm106.476 27.863 10.353-.12c1.252.08 2.504.159 3.756.239l7.714-.477c6.347-1.125 14.272-.905 20.3.358h8.729l5.989 1.428c1.252.119 2.504.239 3.756.358 2.536 1.21 6.523 6.776 7.917 9.525.338 1.469.677 2.937 1.015 4.406.44.397.88.794 1.319 1.191-.771 4.449-2.051 10.551-1.116 15.955.916 5.295 2.62 9.943 3.857 14.765.947 5.477 1.895 10.955 2.842 16.432l1.218 26.79v7.145c.647 3.884 2.949 6.429 4.162 9.883.101-.04.203-.08.304-.12 7.831-7.9 12.029-20.479 16.444-32.387 1.623-4.445 3.248-8.891 4.872-13.336 1.428-5.545 1.133-12.082 2.842-17.146.312-.926.878-2.292 1.522-2.858 1.746-1.531 6.239-1.216 7.105.953.407 2.135-.627 5.962-1.015 8.097-.541 3.73-1.082 7.462-1.624 11.192-.541.993-1.082 1.985-1.624 2.977-.304 2.104-.609 4.208-.913 6.311h.101c1.49-.918 2.568-3.624 4.162-4.048 2.436.317 4.872.635 7.308.952 5.379.04 10.76.08 16.139.119.453-.162.488-.514 1.218-.595 1.198.734 1.499 2.283 2.537 3.096.779.357 1.557.714 2.335 1.071-.109 2.976-3.96 6.156-6.395 6.668-2.366.499-6.501-.985-8.12.477 2.753 4.674 6.457 5.776 8.019 12.383 2.422 10.247-4.274 23.135-12.992 18.218.91-2.077 2.603-3.512 3.045-6.073 1.601-9.286-11.339-12.327-5.38-23.457-5.278.845-14.69 3.78-17.56 7.383-1.318 1.654-1.486 5.129-2.233 6.482-.744 2.765-1.489 4.631-2.233 6.496-1.491 4.011-3.191 7.658-5.075 11.193-.947 1.706-1.895 3.413-2.842 5.12-.778 3.135-1.557 6.271-2.335 9.407-1.355 4.509-7.025 13.77-5.988 18.456 1.339 6.053 4.074 10.867 5.379 16.908.807 3.732-.139 8.982.812 12.502 1.23 4.548 4.074 7.693 5.278 12.502 1.352 5.393-.017 12.048-2.74 14.527-3.14 2.858-7.667 3.298-12.18 4.644-5.075 1.667-10.151 3.334-15.226 5.001-11.834 4.166-24.361 7.542-37.048 10.359-2.706.079-5.414.159-8.12.238-4.743.877-10.386.629-14.921-.238-1.15-.04-2.301-.079-3.451-.119-4.77-.794-9.542-1.588-14.312-2.382-2.131-.158-4.263-.317-6.395-.476-3.181-.929-5.92-2.628-8.729-3.929-1.962-.675-3.925-1.35-5.887-2.024-2.165-1.151-4.331-2.303-6.496-3.453-8.049-4.135-16.222-7.433-21.011-15.361-1.908-3.158-3.211-7.755-3.959-12.145l-.609-9.406c-.067-3.056-.135-6.113-.203-9.169-.744-2.897-1.488-5.795-2.233-8.692-.27-2.857-.541-5.716-.812-8.573-.879-6.199 1.062-12.17.203-17.98-.405-2.743-.299-5.598-.913-8.573-.44-1.429-.88-2.858-1.32-4.286-.338-2.778-.676-5.557-1.015-8.335-2.397-8.989-6.111-16.76-7.105-27.148h-.101c-.026 4.043.208 8.084.71 11.669.385 2.746-.494 5.106-.203 7.739 4.189-.744 6.088 6.069 4.06 9.883 1.261 3.262 4.065 6.17 4.568 9.883-.372 1.786-.745 3.572-1.117 5.358-.237 3.413-.473 6.827-.71 10.24.109 3.885.203 8.389.203 12.622v6.668c.575 6.865 1.15 13.733 1.725 20.599h-.304c-.068-.318-.136-.635-.203-.953-.102 1.111-.203 2.223-.305 3.334l-.507-2.143c-.28.29-.148.321-.609.476-.132-.4-.026-.396-.203-.357-.321.895-.806 1.877-.914 2.62-.067-.04-.135-.08-.203-.12-.067-.158-.135-.317-.203-.476v.238c-.135.199-.27.397-.406.596-.101-.08-.203-.159-.304-.238-.271-1.231-.542-2.461-.812-3.692.135 1.747.27 3.493.406 5.239-.068-.039-.136-.079-.203-.119-.305-.595-.609-1.19-.914-1.786-.101.437-.203.874-.304 1.31l-.609-.357-.609-3.691v3.929c-.17-.119-.339-.238-.508-.357-.068.674-.135 1.349-.203 2.024-.101-1.786-.203-3.572-.304-5.358.048 1.636-.011 3.824-.711 4.644-1.001-.556-.203-1.112-.304-1.667h-.102c-.034.516-.068 1.032-.101 1.548-.381-.224-.453-.188-.609-.715-.203-1.31-.406-2.62-.609-3.929-.026 1.311.115 2.393.406 3.334-.068.079-.136.159-.203.238h-.102c-.163-.609-.155-.599-.507-.357-.102.079-.203.158-.305.238-.034.674-.068 1.349-.101 2.024-.136-.04-.271-.079-.406-.119-.271-.714-.542-1.429-.812-2.143-.068.079-.136.158-.203.238.101.357.203.714.304 1.071-.034.04-.068.08-.101.12h-.407c-.067-.358-.135-.715-.203-1.072l-1.116 1.191c-.102-.437-.203-.874-.305-1.31h-.406c-.023.679-.097 1.318-.406 1.667l-.609-3.93h-.101c.025 1.994.326 3.94 0 5.716-.068.04-.135.079-.203.119v-.238l-.609-2.62h-.102c-.107.435-.082.35-.304.596l-.102-.596h-.101c.072 1.051.265 2.067.101 3.096-.033.04-.067.079-.101.119-.068-.04-.135-.079-.203-.119-.098-1.715-.105-5.739-.914-6.906.068.952.136 1.905.203 2.858h-.304c-.284-1.82-.525-3.976-.812-6.192.034-2.183.068-4.366.101-6.549-.753-5.879-1.021-15.039-.203-21.314.781-5.987-.019-12.418.812-17.979.289-1.931.692-4.051.406-6.311-.033-.992-.067-1.985-.101-2.977.529-2.51 3.109-5.677 4.77-7.025-.507-1.31-1.015-2.62-1.522-3.929-.419-3.049 2.87-5.442 4.872-5.835l-1.116-19.884c-.008-1.638.648-2.392.812-3.573-.136-.714-.271-1.429-.406-2.143-.357-2.312.953-3.68.101-5.596-6.691-1.469-6.011-11.025-4.974-18.932-.236-3.017-.473-6.034-.71-9.05-.407-3.09.411-5.698.507-8.454-2.841-2.54-5.684-5.08-8.526-7.62-1.324-2.213-3.573-11.64-3.857-15.003 1.541-2.838 5.816-8.4 8.831-9.288 3.324-.979 7.906.1 11.064-1.071 2.946-1.093 4.481-4.271 7.409-5.359 5.25-1.949 11.235 1.132 16.647.12l8.627-.834c2.774-.675 5.549-1.35 8.323-2.024 2.132.079 4.264.159 6.395.238 1.549-.347 3.036-2.263 4.669-2.024 1.757.257 3.25 1.29 4.771 1.786 3.552.595 7.105 1.191 10.658 1.786 1.522-.437 3.045-.873 4.567-1.31 4.557-.717 7.206 4.312 7.207 9.169ZM27.913 61.44c1.085.85 9.073 2.174 10.861 1.191h-.203L27.913 61.44Zm-10.15 90.613v.477h.101c-.033-.159-.067-.318-.101-.477ZM33.8 182.059Zm-12.18 17.027c.034.476.068.953.101 1.429h.102c-.068-.476-.135-.953-.203-1.429Zm11.571.357c.102.715.203 1.429.305 2.144.038-.883.02-1.697-.305-2.144Zm-3.958.715c.067.833.135 1.667.203 2.5h.101c-.101-.833-.203-1.667-.304-2.5Zm2.74 1.071v.477h.102l-.102-.477Zm-5.785.239c.067 1.19.135 2.381.203 3.572h.101c-.101-1.191-.203-2.382-.304-3.572Zm-7.207.238Zm5.075.119c.068.595.135 1.191.203 1.786.026-.715.005-1.376-.203-1.786Zm-4.872.833Zm.101.357Zm13.703.358Zm-2.537.357Zm3.146.357c.034.079.068.159.102.238-.034-.079-.068-.159-.102-.238Z'
    />
  </svg>
)

export default Stamp