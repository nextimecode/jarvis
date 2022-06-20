import React from 'react'
import { Container, VStack, Text, Box, Heading } from '@chakra-ui/react'
import NextLayout from 'components/templates/nextLayout'

const Politicas = () => {
  return (
    <NextLayout>
      <Container maxW={'container.lg'}>
        <Box>
          <Heading as="h1" pb={4}>
            Termos de uso
          </Heading>
          <VStack pb={4} spacing="2" alignItems="flex-start">
            <Text as="p" fontSize="lg">
              Para receber informações sobre os seus dados pessoais, os propósitos e as partes de
              informação que são compartilhadas, entre em contato com o proprietário.
            </Text>
          </VStack>
          <Heading py={4} as="h2">
            Tipos de Dados coletados
          </Heading>
          <Text as="p" fontSize="lg">
            Uso de Dados e outros dados coletados
          </Text>
          <Text as="p" fontSize="lg">
            Detalhes completos sobre cada tipo de Dados Pessoais coletados são fornecidos nas seções
            dedicadas desta política de privacidade ou por textos explicativos específicos exibidos
            antes da coleta de dados.
          </Text>
          <Text as="p" fontSize="lg">
            Os Dados Pessoais poderão ser fornecidos livremente pelo Usuário, ou, no caso dos Dados
            de Utilização, coletados automaticamente ao se utilizar este Aplicativo. A menos que
            especificado diferentemente todos os Dados solicitados por este Aplicativo são
            obrigatórios e a falta de fornecimento destes Dados poderá impossibilitar este
            Aplicativo de fornecer os seus Serviços. Nos casos em que este Aplicativo afirmar
            especificamente que alguns Dados não forem obrigatórios, os Usuários ficam livres para
            deixarem de comunicar estes Dados sem nenhuma consequência para a disponibilidade ou o
            funcionamento do Serviço. Os Usuários que tiverem dúvidas a respeito de quais Dados
            Pessoais são obrigatórios estão convidados a entrar em contato com o Proprietário.
            Quaisquer usos de cookies – ou de outras ferramentas de rastreamento – por este
            Aplicativo ou pelos proprietários de serviços terceiros utilizados por este Aplicativo
            serão para a finalidade de fornecer os Serviços solicitados pelo Usuário, além das
            demais finalidades descritas no presente documento e na Política de Cookies, se estiver
            disponível. Os Usuários ficam responsáveis por quaisquer Dados Pessoais de terceiros que
            forem obtidos, publicados ou compartilhados através deste Serviço (este Aplicativo) e
            confirmam que possuem a autorização dos terceiros para fornecerem os Dados para o
            Proprietário.
          </Text>
          <Heading py={4} as="h2">
            Modo e local de processamento dos Dados
          </Heading>
          <Heading py={4} as="h3" size="lg">
            Método de processamento
          </Heading>
          <Text as="p" fontSize="lg">
            O proprietário tomará as medidas de segurança adequadas para impedir o acesso não
            autorizado, divulgação, alteração ou destruição não autorizada dos Dados. O
            processamento dos Dados é realizado utilizando computadores e /ou ferramentas de TI
            habilitadas, seguindo procedimentos organizacionais e meios estritamente relacionados
            com os fins indicados. Além do Proprietário, em alguns casos, os Dados podem ser
            acessados por certos tipos de pessoas encarregadas, envolvidas com a operação deste
            Serviço (este Aplicativo) (administração, vendas, marketing, administração legal do
            sistema) ou pessoas externas (como fornecedores terceirizados de serviços técnicos,
            carteiros, provedores de hospedagem, empresas de TI, agências de comunicação) nomeadas,
            quando necessário, como Processadores de Dados por parte do Proprietário. A lista
            atualizada destas partes pode ser solicitada ao Proprietário a qualquer momento.
          </Text>
          <Heading py={4} as="h3" size="lg">
            Base jurídica para o processamento
          </Heading>
          <Text as="p" fontSize="lg">
            O Proprietário poderá processar os Dados Pessoais relacionados ao Usuário se uma das
            hipóteses a seguir se aplicar:
          </Text>
          <Text as="p" fontSize="lg">
            - Os Usuários tenham dado a sua anuência para uma ou mais finalidades específicas;
            Observação: De acordo com algumas legislações o Proprietário poderá ter a permissão para
            processar os Dados Pessoais ATÉ QUE O Usuário faça objeção a isto (“opt-out”), sem ter
            que se basear em anuência ou em quaisquer outras bases jurídicas a seguir. Isto contudo
            não se aplica sempre que o processamento de Dados Pessoais estiver sujeito à legislação
            europeia de proteção de dados;
          </Text>
          <Text as="p" fontSize="lg">
            - O fornecimento dos Dados for necessário para o cumprimento de um contrato com o
            Usuário e/ou quaisquer obrigações pré-contratuais do mesmo;
          </Text>
          <Text as="p" fontSize="lg">
            - O processamento for necessário para o cumprimento de uma obrigação jurídica à qual o
            Proprietário estiver sujeito;
          </Text>
          <Text as="p" fontSize="lg">
            - O processamento for necessário para a finalidade de interesses legítimos perseguidos
            pelo Proprietário ou por um terceiro;
          </Text>
          <Text as="p" fontSize="lg">
            Em qualquer caso, o proprietário colabora de bom grado para esclarecer qual a base
            jurídica que se aplica ao processamento, e em especial se o fornecimento de dados for um
            requisito obrigatório por força de lei ou contratual, ou uma exigência necessária para
            celebrar um contrato.
          </Text>
          <Heading py={4} as="h3" size="lg">
            Lugar
          </Heading>
          <Text as="p" fontSize="lg">
            Os dados são processados nas sedes de operação dos Proprietários, e em quaisquer outros
            lugares onde as partes envolvidas com o processamento estiverem localizadas. Dependendo
            da localização do usuário as transferências de dados poderão envolver a transferência
            dos Dados do Usuário para outro país que não seja o seu. Para descobrirem mais sobre o
            local de processamento de tais Dados transferidos os Usuários poderão verificar a seção
            contendo os detalhes sobre o processamento de Dados Pessoais.
          </Text>
          <Text as="p" fontSize="lg">
            Os Usuários também possuem o direito de serem informados sobre a base jurídica das
            transferências de Dados para países de fora da União Europeia ou para quaisquer
            organizações internacionais regidas pelo direito internacional público ou formadas por
            dois ou mais países, tal como a ONU, e sobre as medidas de segurança tomadas pelo
            Proprietário para proteger os seus Dados.
          </Text>
          <Text as="p" fontSize="lg">
            Se ocorrerem quaisquer tais transferências os Usuários poderão descobrir mais a respeito
            verificando as seções pertinentes deste documento ou perguntando ao Proprietário
            utilizando as informações fornecidas na seção de contatos.
          </Text>
          <Heading py={4} as="h3" size="lg">
            Período de conservação
          </Heading>
          <Text as="p" fontSize="lg">
            Os Dados Pessoais serão processados e armazenados pelo tempo que for necessário para as
            finalidades para as quais forem coletados.
          </Text>
          <Text as="p" fontSize="lg">
            Portanto:
          </Text>
          <Text as="p" fontSize="lg">
            - Os Dados Pessoais coletados para as finalidades relacionadas com a execução de um
            contrato entre o Proprietário e o Usuário serão conservados até que tal contrato tenha
            sido completamente cumprido.
          </Text>
          <Text as="p" fontSize="lg">
            - Os Dados Pessoais coletados para as finalidades relacionadas com os legítimos
            interesses do Proprietário serão conservados pelo tempo que for necessário para cumprir
            tais finalidades. Os Usuários poderão obter informações específicas sobre os interesses
            legítimos perseguidos pelo Proprietário dentro das seções pertinentes deste documento ou
            entrando em contato com o Proprietário.
          </Text>
          <Text as="p" fontSize="lg">
            O Proprietário poderá ter a permissão de conservar os Dados Pessoais por um prazo maior
            sempre que o Usuário tiver dado a sua autorização para tal processamento, enquanto tal
            autorização não tiver sido retirada. Além disso, o proprietário poderá ficar obrigado a
            conservar os Dados Pessoais por um prazo maior em todas as ocasiões em que estiver
            obrigado a fazê-lo para o cumprimento de uma obrigação jurídica ou em cumprimento de um
            mandado de uma autoridade.
          </Text>
          <Text as="p" fontSize="lg">
            Assim que o prazo de conservação vencer os Dados Pessoais serão apagados. Desta forma o
            direito de acessar, o direito de apagar, o direito de corrigir e o direito à
            portabilidade dos dados não poderão ter o seu cumprimento exigido após o vencimento do
            prazo de conservação.
          </Text>
          <Heading py={4} as="h3" size="lg">
            Os direitos dos Usuários
          </Heading>
          <Text as="p" fontSize="lg">
            Os Usuários poderão exercer determinados direitos a respeito dos seus Dados processados
            pelo Proprietário.
          </Text>
          <Text as="p" fontSize="lg">
            Em especial, os Usuários possuem os direitos a fazer o seguinte:
          </Text>
          <Text as="p" fontSize="lg">
            - Retirar a sua anuência a qualquer momento. Os Usuários possuem o direito de retirar a
            sua anuência nos casos em que tenham dado a sua anuência anteriormente para o
            processamento dos seus Dados Pessoais.
          </Text>
          <Text as="p" fontSize="lg">
            - Objetar o processamento dos seus Dados. Os Usuários possuem o direito de objetar o
            processamento dos seus Dados se o processamento for executado sobre outra base jurídica
            que não a anuência. São fornecidos detalhes adicionais na seção específica abaixo.
          </Text>
          <Text as="p" fontSize="lg">
            - Acessar os seus Dados. Os Usuários possuem o direito de saber se os seus Dados estão
            sendo tratados pelo Proprietário, obter revelações sobre determinados aspectos do
            tratamento e conseguir uma cópia dos Dados que estiverem sendo tratados.
          </Text>
          <Text as="p" fontSize="lg">
            - Verificar e pedir retificação. Os Usuários possuem o direito de verificar a exatidão
            dos seus Dados e de pedir que os mesmos sejam atualizados ou corrigidos.
          </Text>
          <Text as="p" fontSize="lg">
            - Restringir o processamento dos seus Dados. Os Usuários possuem o direito de, sob
            determinadas circunstâncias, restringir o processamento dos seus Dados para qualquer
            outra finalidade que não seja o armazenamento dos mesmos.
          </Text>
          <Text as="p" fontSize="lg">
            - Ter os seus Dados Pessoais apagados ou retirados de outra maneira. Os Usuários possuem
            o direito de, sob determinadas circunstâncias, obter a eliminação dos seus Dados do
            Proprietário.
          </Text>
          <Text as="p" fontSize="lg">
            - Receber os seus Dados e ter os mesmos transferidos para outro controlador. Os Usuários
            possuem o direito de receber os seus Dados em um formato estruturado, utilizado
            comumente e apto a ser lido por máquinas e, se for viável tecnicamente, fazer com que os
            mesmos sejam transmitidos para outro controlador sem nenhum empecilho. Esta determinação
            se aplica condicionada a que os Dados sejam processados por meios automatizados e que o
            processamento esteja baseado na anuência do Usuário, em um contrato do qual o Usuário
            seja uma das partes ou por obrigações pré-contratuais do mesmo.
          </Text>
          <Text as="p" fontSize="lg">
            - Registrar uma reclamação. Os Usuários possuem o direito de apresentar reclamação
            perante a sua autoridade de proteção de dados competente.
          </Text>
          <Heading py={4} as="h3" size="lg">
            Detalhes sobre o direito de objetar ao processamento
          </Heading>
          <Text as="p" fontSize="lg">
            Nos casos em que os Dados Pessoais forem processados por um interesse público, no
            exercício de uma autorização oficial na qual o Proprietário estiver investido ou para
            finalidades dos interesses legítimos perseguidos pelo Proprietário, os Usuários poderão
            objetar tal processamento através do fornecimento de um motivo relacionado com a sua
            situação em especial para justificar a objeção.
          </Text>
          <Text as="p" fontSize="lg">
            Os Usuários devem saber, entretanto, que caso os seus Dados Pessoais sejam processados
            para finalidades de marketing direto eles podem objetar tal processamento a qualquer
            momento sem fornecer nenhuma justificativa. Os Usuários podem consultar as seções
            respectivas deste documento.
          </Text>
          <Heading py={4} as="h3" size="lg">
            Como exercer estes direitos
          </Heading>
          <Text as="p" fontSize="lg">
            Quaisquer pedidos para exercer os direitos dos Usuários podem ser direcionados ao
            proprietário através dos dados para contato fornecidos neste documento. Estes pedidos
            podem ser exercidos sem nenhum custo e serão atendidos pelo Proprietário com a maior
            brevidade possível e em todos os casos em prazo inferior a um mês.
          </Text>
          <Heading py={4} as="h3" size="lg">
            Informações adicionais sobre a coleta e processamento de Dados
          </Heading>
          <Heading py={4} as="h3" size="lg">
            Ação jurídica
          </Heading>
          <Text as="p" fontSize="lg">
            Os Dados Pessoais dos Usuários podem ser utilizados para fins jurídicos pelo
            Proprietário em juízo ou nas etapas conducentes à possível ação jurídica decorrente de
            uso indevido deste Serviço (este Aplicativo) ou dos Serviços relacionados. O Usuário
            declara estar ciente de que o Proprietário poderá ser obrigado a revelar os Dados
            Pessoais mediante solicitação das autoridades governamentais.
          </Text>
          <Heading py={4} as="h3" size="lg">
            Informações adicionais sobre os Dados Pessoais do Usuário
          </Heading>
          <Text as="p" fontSize="lg">
            Além das informações contidas nesta política de privacidade, este Aplicativo poderá
            fornecer ao Usuário informações adicionais e contextuais sobre os serviços específicos
            ou a coleta e processamento de Dados Pessoais mediante solicitação.
          </Text>
          <Heading py={4} as="h3" size="lg">
            Informações adicionais sobre os Dados Pessoais do Usuário
          </Heading>
          <Text as="p" fontSize="lg">
            Além das informações contidas nesta política de privacidade, este Aplicativo poderá
            fornecer ao Usuário informações adicionais e contextuais sobre os serviços específicos
            ou a coleta e processamento de Dados Pessoais mediante solicitação.
          </Text>
          <Heading py={4} as="h3" size="lg">
            Logs do sistema e manutenção
          </Heading>
          <Text as="p" fontSize="lg">
            Para fins de operação e manutenção, este Aplicativo e quaisquer serviços de terceiros
            poderão coletar arquivos que gravam a interação com este Aplicativo (logs do sistema) ou
            usar outros Dados Pessoais (tais como endereço IP) para esta finalidade.
          </Text>
          <Heading py={4} as="h3" size="lg">
            As informações não contidas nesta política
          </Heading>
          <Text as="p" fontSize="lg">
            Mais detalhes sobre a coleta ou processamento de Dados Pessoais podem ser solicitados ao
            proprietário, a qualquer momento. Favor ver as informações de contato no início deste
            documento.
          </Text>
          <Heading py={4} as="h3" size="lg">
            Como são tratados os pedidos de “Não me Rastreie”
          </Heading>
          <Text as="p" fontSize="lg">
            Este Aplicativo não suporta pedidos de “Não Me Rastreie”. Para determinar se qualquer um
            dos serviços de terceiros que utilizam honram solicitações de “Não Me Rastreie”, por
            favor leia as políticas de privacidade.
          </Text>
          <Heading py={4} as="h3" size="lg">
            Mudanças nesta política de privacidade
          </Heading>
          <Text as="p" fontSize="lg">
            O Proprietário se reserva o direito de fazer alterações nesta política de privacidade a
            qualquer momento, através de notificação a seus Usuários nesta página e possivelmente
            dentro deste Serviço (este Aplicativo) e/ou – na medida em que for técnica e
            juridicamente viável – enviando um aviso para os Usuários através de quaisquer
            informações de contato disponíveis para o Proprietário. É altamente recomendável checar
            esta página regularmente, consultando a data da última modificação informada na parte
            inferior.
          </Text>
          <Text as="p" fontSize="lg">
            Caso as mudanças afetem as atividades de processamento realizadas com base na anuência
            do Usuário, o Proprietário coletará nova anuência do Usuário, onde for exigida.
          </Text>
          <Heading py={4} as="h3" size="lg">
            Informações para Usuários que residem no Brasil
          </Heading>
          <Text as="p" fontSize="lg">
            Esta parte do documento se integra e complementa as informações contidas no resto desta
            política de privacidade e é fornecida pela entidade que opera este Aplicativo e,
            conforme for o caso, suas controladoras, subsidiárias e afiliadas (para fins desta
            seção, doravante denominadas em conjunto através dos pronomes &quot;nós&quot;,
            &quot;nos&quot;, &quot;nosso&quot; e &quot;conosco&quot;).
          </Text>
          <Text as="p" fontSize="lg">
            As disposições contidas nesta seção aplicar-se-ão a todos os Usuários que sejam
            residentes no Brasil, de acordo com a &quot;Lei geral de Proteção de Dados&quot; (os
            Usuários serão doravante denominados através dos pronomes &quot;você&quot; e
            &quot;seu&quot;). Para tais Usuários, estas disposições substituem todas as outras
            disposições possivelmente divergentes ou conflitantes contidas nesta política de
            privacidade. Esta parte do documento usa o termo &quot;informações pessoais&quot;,
            conforme definido na Lei Geral de Proteção de Dados (LGPD).
          </Text>
          <Heading py={4} as="h3" size="lg">
            Em que nos embasamos para processar suas informações pessoais
          </Heading>
          <Text as="p" fontSize="lg">
            Podemos processar suas informações pessoais somente se tivermos uma base legal para tal
            processamento. As bases legais são as seguintes:
          </Text>
          <Text as="p" fontSize="lg">
            - Sua anuência com as respectivas atividades de processamento;
          </Text>
          <Text as="p" fontSize="lg">
            - conformidade com uma obrigação legal ou regulamentar imposta a nós;
          </Text>
          <Text as="p" fontSize="lg">
            - o cumprimento de políticas públicas dispostas em leis ou regulamentações ou com base
            em contratos, acordos e instrumentos legais semelhantes;
          </Text>
          <Text as="p" fontSize="lg">
            - estudos conduzidos por entidades de pesquisa, preferivelmente realizados sobre
            informações pessoais anônimas;
          </Text>
          <Text as="p" fontSize="lg">
            - a execução de um contrato e seus procedimentos preliminares, nos casos em que você for
            parte do contrato;
          </Text>
          <Text as="p" fontSize="lg">
            - o exercício de nossos direitos em processos judiciais, administrativos ou de
            arbitragem;
          </Text>
          <Text as="p" fontSize="lg">
            - proteção ou segurança física de você ou de um terceiro;
          </Text>
          <Text as="p" fontSize="lg">
            - a proteção da saúde – em procedimentos realizados por entidades ou profissionais da
            saúde;
          </Text>
          <Text as="p" fontSize="lg">
            - nossos interesses legítimos, desde que seus direitos e liberdades fundamentais não
            prevaleçam sobre tais interesses;
          </Text>
          <Text as="p" fontSize="lg">
            - proteção ao crédito.
          </Text>
          <Text as="p" fontSize="lg">
            Para saber mais sobre as bases legais, você pode entrar em contato conosco a qualquer
            momento através dos dados de contato fornecidos neste documento.
          </Text>
          <Heading py={4} as="h3" size="lg">
            Categorias de informações pessoais processadas
          </Heading>
          <Text as="p" fontSize="lg">
            Para saber que categorias de suas informações pessoais são processadas, você poderá ler
            a seção intitulada &quot;Informações detalhadas sobre o processamento de Dados
            Pessoais&quot; neste documento.
          </Text>
          <Heading py={4} as="h3" size="lg">
            Por que processamos suas informações pessoais
          </Heading>
          <Text as="p" fontSize="lg">
            Para saber por que processamos suas informações pessoais, você poderá ler sobre as
            seções intituladas &quot;Informações detalhadas sobre o processamento de Dados
            Pessoais&quot; e &quot;As finalidades do processamento&quot; neste documento.
          </Text>
          <Heading py={4} as="h3" size="lg">
            Seus direitos de privacidade como brasileiro, como enviar uma solicitação e nossas
            respostas a suas solicitações
          </Heading>
          <Text as="p" fontSize="lg">
            Você tem o direito de:
          </Text>
          <Text as="p" fontSize="lg">
            - obter confirmação sobre a existência de atividades de tratamento de suas informações
            pessoais;
          </Text>
          <Text as="p" fontSize="lg">
            - acesso a suas informações pessoais;
          </Text>
          <Text as="p" fontSize="lg">
            - fazer com que suas informações pessoais incompletas, inexatas ou desatualizadas sejam
            corrigidas;
          </Text>
          <Text as="p" fontSize="lg">
            - obter o anonimato, bloqueio ou eliminação de suas informações pessoais desnecessárias
            ou em excesso, ou de informações que não estejam sendo processadas de acordo com a LGPD;
          </Text>
          <Text as="p" fontSize="lg">
            - obter informações sobre a possibilidade de fornecer ou recusar sua anuência e as
            respectivas consequências;
          </Text>
          <Text as="p" fontSize="lg">
            - obter informações sobre os terceiros com quem compartilhamos suas informações
            pessoais;
          </Text>
          <Text as="p" fontSize="lg">
            - obter, mediante sua solicitação expressa, a portabilidade de suas informações pessoais
            (exceto informações anônimas) para outro fornecedor de produtos ou serviços, desde que
            nossos segredos comerciais e industriais continuem protegidos;
          </Text>
          <Text as="p" fontSize="lg">
            - obter a exclusão de suas informações pessoais tratadas, se o tratamento teve base em
            sua anuência, a menos que se apliquem uma ou mais exceções daquelas dispostas no art. 16
            da LGPD;
          </Text>
          <Text as="p" fontSize="lg">
            - retirar sua anuência a qualquer momento;
          </Text>
          <Text as="p" fontSize="lg">
            - registrar uma reclamação com relação a suas informações pessoais à ANPD (Autoridade
            Nacional de Proteção de Dados) ou aos órgãos de proteção ao consumidor;
          </Text>
          <Text as="p" fontSize="lg">
            - opor-se a uma atividade de tratamento nos casos em que o tratamento não for realizado
            em conformidade com as disposições da lei;
          </Text>
          <Text as="p" fontSize="lg">
            - solicitar informações claras e adequadas a respeito dos critérios e procedimentos
            usados para uma decisão automatizada; e
          </Text>
          <Text as="p" fontSize="lg">
            - solicitar a revisão de decisões tomadas exclusivamente com base no tratamento
            automatizado de suas informações pessoais, que afetem seus interesses. Nisto estão
            incluídas decisões para definir seu perfil pessoal, profissional, de consumidor e de
            crédito ou aspectos de sua personalidade.
          </Text>
          <Text as="p" fontSize="lg">
            Você nunca será discriminado ou sofrerá qualquer tipo de prejuízo se exercer seus
            direitos.
          </Text>
          <Heading py={4} as="h3" size="lg">
            Como registrar sua solicitação
          </Heading>
          <Text as="p" fontSize="lg">
            Você poderá registrar sua solicitação expressa de exercer seus direitos gratuitamente ,
            em qualquer momento, usando os dados de contato fornecidos neste documento ou através de
            seu representante legal.
          </Text>
          <Heading py={4} as="h3" size="lg">
            Como e quando nós responderemos a sua solicitação
          </Heading>
          <Text as="p" fontSize="lg">
            Faremos o possível para responder imediatamente a suas solicitações. Em qualquer caso,
            caso seja impossível, faremos questão de comunicar a você os motivos de fato ou de
            direito que nos impeçam de atender imediatamente, ou de qualquer outra forma, cumprir
            suas solicitações. Nos casos em que não estamos processando suas informações pessoais,
            indicaremos a pessoa física ou jurídica a quem você deve encaminhar suas solicitações,
            se estivermos na posição de fazê-lo. Caso você registre uma solicitação de acesso ou de
            confirmação de processamento de informações pessoais, certifique-se de especificar se
            deseja que suas informações pessoais sejam entregues em formato eletrônico ou impresso.
            Você também precisará nos informar se deseja que respondamos sua solicitação
            imediatamente, sendo que neste caso responderemos de maneira simplificada ou se você
            precisa de uma resposta completa. Neste último caso, responderemos no prazo de 15 dias a
            contar do momento de sua solicitação, fornecendo todas as informações sobre a origem de
            suas informações pessoais, confirmação da existência ou não de registros, quaisquer
            critérios utilizados para o processamento e as finalidades do processamento, mantendo
            protegidos nossos segredos comerciais e industriais. Caso você solicite uma retificação,
            exclusão, anonimato ou bloqueio de informações pessoais, comunicaremos imediatamente sua
            solicitação a outras partes com quem compartilhamos suas informações pessoais, a fim de
            permitir que estes terceiros também cumpram sua solicitação – exceto nos casos em que
            tal comunicação se provar impossível ou envolver um esforço desproporcional de nosso
            lado.
          </Text>
          <Heading py={4} as="h3" size="lg">
            Transferência de informações pessoais para fora do Brasil permitida por lei
          </Heading>
          <Text as="p" fontSize="lg">
            Temos permissão para transferir suas informações pessoais para fora do território
            brasileiro nos seguintes casos:
          </Text>
          <Text as="p" fontSize="lg">
            - quando a transferência for necessária para fins de cooperação jurídica internacional
            entre órgãos públicos de inteligência, investigação e Ministério Público, de acordo com
            os meios legais dispostos no direito internacional;
          </Text>
          <Text as="p" fontSize="lg">
            - quando a transferência for necessária para proteger sua vida ou segurança física ou de
            terceiros;
          </Text>
          <Text as="p" fontSize="lg">
            - quando a transferência foi autorizada pela ANPD;
          </Text>
          <Text as="p" fontSize="lg">
            - quando a transferência decorrer de um compromisso assumido em um acordo de cooperação
            internacional;
          </Text>
          <Text as="p" fontSize="lg">
            - quando a transferência for necessária para a execução de uma política pública ou
            atribuição legal de serviço público;
          </Text>
          <Text as="p" fontSize="lg">
            - uando a transferência for necessária para o cumprimento de uma obrigação legal ou
            regulamentar, a execução de um contrato ou procedimentos preliminares relacionados a um
            contrato ou o exercício regular de direitos em processos judiciais, administrativos ou
            de arbitragem.
          </Text>
        </Box>
      </Container>
    </NextLayout>
  )
}

export default Politicas
